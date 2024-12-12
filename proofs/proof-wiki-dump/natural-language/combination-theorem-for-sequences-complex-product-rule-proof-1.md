# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Complex/Product_Rule/Proof_1

Theorem
$\ds \lim_{n \mathop \to \infty} \paren {z_n w_n} = c d$


Proof
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





