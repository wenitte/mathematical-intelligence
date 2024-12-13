# 

Source: https://proofwiki.org/wiki/Radius_of_Convergence_of_Derivative_of_Complex_Power_Series

Theorem
Let $\xi \in \C$.
For all $z \in \C$, define the power series:

$\ds \map S z = \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n$
and:

$\ds \map {S'} z = \sum_{n \mathop = 1}^\infty n a_n \paren {z - \xi}^{n - 1}$
Let $R$ be the radius of convergence of $\map S z$, and let $R'$ be the radius of convergence of $\map {S'} z$.

Then $R = R'$.


Proof
Suppose that $z \in \C$ with $\cmod {z - \xi} < R'$.
Then $\map {S'} z$ converges absolutely by Existence of Radius of Convergence of Complex Power Series, so:














\(\ds 1\)

\(\ge\)







\(\ds \limsup_{n \mathop \to \infty} \cmod {n a_n \paren {z - \xi}^{n - 1} }^{1 / n}\)





$n$th Root Test














\(\ds \)

\(>\)







\(\ds \limsup_{n \mathop \to \infty} \cmod {a_n \paren {z - \xi}^n }^{1/n}\)





as $\cmod {n  \paren {z - \xi}^{n - 1} } > \cmod { \paren {z - \xi}^n }$ for all $n > \cmod {z - \xi}$



From the $n$th Root Test, it follows that $S \paren z$ converges absolutely.
Hence, $R \ge R'$.
$\Box$

Suppose that $z \in \C$ with $\cmod {z - \xi} < R$.
Find $z_o \in \C$ such that $\cmod {z - \xi} < \cmod {z_0 - \xi} < R$.
By Existence of Radius of Convergence of Complex Power Series, $\map S {z_0}$ converges absolutely.
From the $n$th Root Test, it follows that $\cmod {a_n \paren {z_0 - \xi}^n}^{1/n} < 1$ for all $n \ge N$ for some $N \in \N$.
Then:














\(\ds 1\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod n^{1/n}\)





Limit of Integer to Reciprocal Power














\(\ds \)

\(>\)







\(\ds \lim_{n \mathop \to \infty} \cmod n^{1/n} \cmod {\frac {z - \xi} {z_0 - \xi} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod n^{1/n} \lim_{n \mathop \to \infty} \cmod {\frac {z - \xi} {z_0 - \xi} }^{\paren {n - 1}/n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \cmod {n \paren {\frac {z - \xi} {z_0 - \xi} }^{n - 1} }^{1/n}\)





Product Rule for Sequences, Complex Modulus of Product of Complex Numbers














\(\ds \)

\(\ge\)







\(\ds \lim_{n \mathop \to \infty} \cmod {n \paren {\frac {z - \xi} {z_0 - \xi} }^{n - 1} } \limsup_{n \mathop \to \infty} \cmod {a_n \paren {z_0 - \xi}^{n - 1} }^{1/n}\)





$n$th Root Test, as remarked above














\(\ds \)

\(\ge\)







\(\ds \limsup_{n \mathop \to \infty} \cmod {n \paren {\frac {z - \xi} {z_0 - \xi} }^{n - 1} a_n \paren {z_0 - \xi}^{n - 1} }^{1/n}\)




















\(\ds \)

\(=\)







\(\ds \limsup_{n \mathop \to \infty} \cmod {n a_n \paren {z - \xi}^{n - 1} }^{1/n}\)









From the $n$th Root Test, it follows that $\map {S'} z$ converges absolutely.
Hence, $R' \ge R$, so $R' = R$.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 1.4$




