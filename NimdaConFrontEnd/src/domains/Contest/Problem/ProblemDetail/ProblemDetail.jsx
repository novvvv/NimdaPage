import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import BlackLineButton from '@/components/Button/BlackLine';

function ProblemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProblem();
  }, [id]);

  const loadProblem = async () => {
    setLoading(true);
    setError(null);
    try {
      // 임시 데이터 (실제 API 연동 전까지)
      const mockProblem = {
        id: id,
        title: `문제 ${id}`,
        description: `이것은 문제 ${id}의 상세 설명입니다.\n\n문제를 해결하기 위해 다음과 같은 단계를 따라주세요:\n1. 입력을 받습니다\n2. 처리합니다\n3. 결과를 출력합니다`,
        difficulty: 'Medium',
        timeLimit: '2초',
        memoryLimit: '256MB',
        inputFormat: '첫 번째 줄에 정수 N이 주어진다.\n두 번째 줄에 N개의 정수가 주어진다.',
        outputFormat: '정답을 출력한다.',
        sampleInput: '5\n1 2 3 4 5',
        sampleOutput: '15',
        testCases: [
          { input: '5\n1 2 3 4 5', output: '15', expected: '15' },
          { input: '3\n10 20 30', output: '60', expected: '60' },
          { input: '1\n42', output: '42', expected: '42' }
        ],
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01'
      };
      
      // 실제 API 호출 시뮬레이션
      setTimeout(() => {
        setProblem(mockProblem);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('문제 로드 오류:', error);
      setError('문제를 불러오는 중 오류가 발생했습니다.');
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate('/admin');
  };

  const editProblem = () => {
    navigate(`/problem-edit/${id}`);
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <div className="text-lg text-gray-600">문제를 불러오는 중...</div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-red-600 text-lg mb-4">{error}</div>
          <BlackLineButton onClick={goBack}>돌아가기</BlackLineButton>
        </div>
      </Layout>
    );
  }

  if (!problem) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-lg mb-4">문제를 찾을 수 없습니다.</div>
          <BlackLineButton onClick={goBack}>돌아가기</BlackLineButton>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">문제 상세</h1>
          <div className="flex gap-2">
            <BlackLineButton onClick={editProblem}>
              문제 수정
            </BlackLineButton>
            <BlackLineButton onClick={goBack}>
              돌아가기
            </BlackLineButton>
          </div>
        </div>

        {/* 문제 정보 카드 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{problem.title}</h2>
              <p className="text-gray-600">문제 ID: {problem.id}</p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {problem.difficulty}
              </span>
              <div className="mt-2 text-sm text-gray-600">
                <p>시간 제한: {problem.timeLimit}</p>
                <p>메모리 제한: {problem.memoryLimit}</p>
              </div>
            </div>
          </div>

          {/* 문제 설명 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">문제 설명</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="whitespace-pre-wrap">{problem.description}</p>
            </div>
          </div>

          {/* 입력 형식 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">입력 형식</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="whitespace-pre-wrap">{problem.inputFormat}</p>
            </div>
          </div>

          {/* 출력 형식 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">출력 형식</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="whitespace-pre-wrap">{problem.outputFormat}</p>
            </div>
          </div>

          {/* 예제 입력/출력 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">예제 입력</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <pre>{problem.sampleInput}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">예제 출력</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <pre>{problem.sampleOutput}</pre>
              </div>
            </div>
          </div>

          {/* 테스트 케이스 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">테스트 케이스</h3>
            <div className="space-y-4">
              {problem.testCases.map((testCase, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-2">테스트 케이스 {index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">입력:</p>
                      <div className="bg-gray-100 p-2 rounded font-mono text-sm">
                        <pre>{testCase.input}</pre>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">출력:</p>
                      <div className="bg-gray-100 p-2 rounded font-mono text-sm">
                        <pre>{testCase.output}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 메타 정보 */}
          <div className="border-t pt-4">
            <div className="text-sm text-gray-500">
              <p>생성일: {problem.createdAt}</p>
              <p>수정일: {problem.updatedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProblemDetail;
