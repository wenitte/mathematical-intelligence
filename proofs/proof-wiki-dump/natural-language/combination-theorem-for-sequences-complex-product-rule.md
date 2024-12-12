# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Complex/Product_Rule



Theorem
Let $\sequence {z_n}$ and $\sequence {w_n}$ be sequences in $\C$.
Let $\sequence {z_n}$ and $\sequence {w_n}$ be convergent to the following limits:

$\ds \lim_{n \mathop \to \infty} z_n = c$
$\ds \lim_{n \mathop \to \infty} w_n = d$

Then:

$\ds \lim_{n \mathop \to \infty} \paren {z_n w_n} = c d$


Proof 1
Because $\sequence {z_n}$ converges, it is bounded by Convergent Sequence is Bounded.
Suppose $\cmod {z_n} \le K$ for $n = 1, 2, 3, \ldots$.
Then:














\(\ds \cmod {z_n w_n - c d}\)

\(=\)







\(\ds \cmod {z_n w_n - z_n d + z_n d - c d}\)




















\(\ds \)

\(\le\)







\(\ds \cmod {z_n w_n - z_n d} + \cmod {z_n d - c d}\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(=\)







\(\ds \cmod {z_n} \cmod {w_n - d} + m \cdot \size {z_n - c}\)





Complex Modulus of Product of Complex Numbers














\(\ds \)

\(\le\)







\(\ds K \cdot \cmod {w_n - d} + \cmod d \cdot \cmod {z_n - c}\)




















\(\ds \)

\(=:\)







\(\ds \phi_n\)










But $z_n \to c$ as $n \to \infty$.
So $\cmod {z_n - c} \to 0$ as $n \to \infty$ from Convergent Sequence Minus Limit.
Similarly $\cmod {w_n - d} \to 0$ as $n \to \infty$.
From the Combined Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {\lambda z_n + \mu w_n} = \lambda c + \mu d$, $\phi_n \to 0$ as $n \to \infty$
The result follows by the Squeeze Theorem for Complex Sequences.
$\blacksquare$


Proof 2
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
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.2$. Sequences: Rules. $\text {(iii)}$




