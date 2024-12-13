# 

Source: https://proofwiki.org/wiki/Product_to_n_of_Product_to_Index

Theorem
$\ds \prod_{i \mathop = 0}^n \prod_{j \mathop = 0}^i a_i a_j = \prod_{i \mathop = 0}^n {a_i}^{n + 2}$


Proof
Let:














\(\ds P_1\)

\(:=\)







\(\ds \prod_{i \mathop = 0}^n \prod_{j \mathop = 0}^i a_i a_j\)




















\(\ds P_2\)

\(:=\)







\(\ds \prod_{i \mathop = 0}^n \prod_{j \mathop = i}^n a_i a_j\)










Then:














\(\ds P_1 P_2\)

\(=\)







\(\ds \paren {\prod_{i \mathop = 0}^n \prod_{j \mathop = 0}^i a_i a_j} \paren {\prod_{i \mathop = 0}^n \prod_{j \mathop = i}^n a_i a_j}\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 0}^n \paren {\paren {\prod_{j \mathop = 0}^i a_i a_j} \paren {\prod_{j \mathop = i}^n a_i a_j} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 0}^n \paren {\paren {\prod_{j \mathop = 0}^n a_j a_j} {a_i}^2}\)





Product of Products over Overlapping Domains














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 0}^n \paren { {a_i}^{n + 1} \paren {\prod_{j \mathop = 0}^n a_j} {a_i}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{i \mathop = 0}^n {a_i}^{n + 1} } \paren {\prod_{j \mathop = 0}^n \paren {\prod_{j \mathop = 0}^n a_j} {a_i}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{i \mathop = 0}^n {a_i}^{n + 1} } \paren {\prod_{j \mathop = 0}^n {a_i}^{n + 1} {a_i}^2}\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 0}^n {a_i}^{2 n + 4}\)














\(\ds \leadsto \ \ \)





\(\ds P_1\)

\(=\)







\(\ds \prod_{i \mathop = 0}^n {a_i}^{n + 2}\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $26$




