# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Complex/Product_Rule/Proof_2

Theorem
$\ds \lim_{n \mathop \to \infty} \paren {z_n w_n} = c d$


Proof
Let $z_n = x_n + i y_n$.
Let $w_n = u_n + i v_n$.
Let $c = a + i b$
Let $d = e + i f$.

By definition of convergent complex sequence:














\(\ds \lim_{n \mathop \to \infty} z_n\)

\(=\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} x_n + i \lim_{n \mathop \to \infty} y_n\)

\(=\)







\(\ds a + i b\)





Definition of Convergent Complex Sequence


















\(\ds \lim_{n \mathop \to \infty} w_n\)

\(=\)







\(\ds d\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} u_n + i \lim_{n \mathop \to \infty} v_n\)

\(=\)







\(\ds e + i f\)





Definition of Convergent Complex Sequence




Then:














\(\ds \lim_{n \mathop \to \infty} z_n w_n\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\paren {x_n u_n - y_n v_n} + i \paren {y_n u_n + x_n v_n} }\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {x_n u_n - y_n v_n} + i \lim_{n \mathop \to \infty} \paren {y_n u_n + x_n v_n}\)





Definition of Convergent Complex Sequence














\(\ds \)

\(=\)







\(\ds \paren {\lim_{n \mathop \to \infty} \paren {x_n u_n} - \lim_{n \mathop \to \infty} \paren {y_n v_n} } + i \paren {\lim_{n \mathop \to \infty} \paren {y_n u_n} + \lim_{n \mathop \to \infty} \paren {x_n v_n} }\)





Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \paren {\lim_{n \mathop \to \infty} \paren {x_n} \lim_{n \mathop \to \infty} \paren {u_n} - \lim_{n \mathop \to \infty} \paren {y_n} \lim_{n \mathop \to \infty} \paren {v_n} } + i \paren {\lim_{n \mathop \to \infty} \paren {y_n} \lim_{n \mathop \to \infty} \paren {u_n} + \lim_{n \mathop \to \infty} \paren {x_n} \lim_{n \mathop \to \infty} \paren {v_n} }\)





Product Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \paren {a e - b f} + i \paren {b e + a f}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + i b} \paren {e + i f}\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds c d\)









$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.2$. Sequences: Rules




