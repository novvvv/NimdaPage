package com.nimda.con.judge.controller;

import com.nimda.con.judge.dto.ProblemCreateDTO;
import com.nimda.con.judge.entity.Problem;
import com.nimda.con.judge.service.ProblemService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/problems")
@CrossOrigin(origins = "*")
public class ProblemController {
    
    @Autowired
    private ProblemService problemService;
    
    /**
     * 문제 생성
     */
    @PostMapping
    public ResponseEntity<?> createProblem(@Valid @RequestBody ProblemCreateDTO problemCreateDTO) {
        try {
            
            Problem problem = problemService.createProblem(problemCreateDTO); // 문제 생성 
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "문제가 성공적으로 생성되었습니다");
            response.put("problem", problem);
            
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "문제 생성 중 오류가 발생했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
    
    /**
     * 모든 문제 조회
     */
    @GetMapping
    public ResponseEntity<?> getAllProblems() {
        System.out.println("=== getAllProblems() 메서드 호출됨 ===");
        try {
            System.out.println("=== ProblemService.getAllProblems() 호출 중 ===");
            List<Problem> problems = problemService.getAllProblems();
            System.out.println("=== 문제 수: " + problems.size() + " ===");
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("problems", problems);
            
            System.out.println("=== 응답 생성 완료 ===");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.out.println("=== 오류 발생: " + e.getMessage() + " ===");
            e.printStackTrace();
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "문제 목록 조회 중 오류가 발생했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
    
    /**
     * ID로 문제 조회
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getProblemById(@PathVariable Long id) {
        try {
            Problem problem = problemService.getProblemById(id);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("problem", problem);
            
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "문제 조회 중 오류가 발생했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
    
    /**
     * 문제 삭제
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProblem(@PathVariable Long id) {
        try {
            problemService.deleteProblem(id);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "문제가 성공적으로 삭제되었습니다");
            
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "문제 삭제 중 오류가 발생했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
}
