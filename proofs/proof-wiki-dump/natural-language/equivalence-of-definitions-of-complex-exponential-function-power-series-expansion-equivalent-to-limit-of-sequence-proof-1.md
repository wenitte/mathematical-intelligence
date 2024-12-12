# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Exponential_Function/Power_Series_Expansion_equivalent_to_Limit_of_Sequence/Proof_1



Theorem
The following definitions of the concept of Complex Exponential Function are equivalent:

As a Power Series Expansion
The exponential function can be defined as a (complex) power series:










\(\ds \forall z \in \C: \, \)



\(\ds \exp z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac z {1!} + \frac {z^2} {2!} + \frac {z^3} {3!} + \cdots + \frac {z^n} {n!} + \cdots\)









As a Limit of a Sequence
The exponential function can be defined as a limit of a sequence:

$\ds \exp z := \lim_{n \mathop \to \infty} \paren {1 + \dfrac z n}^n$


Proof
Fix $z \in \C$.
For every $r, n \in \N$, define:

$\map {v_r} n = \dbinom n r \paren {\dfrac z n}^r$
Also, for every $r \in \N$, define:

$M_r = \dfrac {\size z^r} {r!}$
Then:














\(\ds \size {\map {v_r} n}\)

\(=\)







\(\ds \binom n r \frac {\size z^r} {n^r}\)





Complex Modulus of Product of Complex Numbers














\(\ds \)

\(\le\)







\(\ds M_r\)





Binomial Coefficient over Power Not Greater than Reciprocal of Factorial



Furthermore, by Radius of Convergence of Power Series over Factorial:

$\ds \sum_{r \mathop = 0}^\infty M_r$ converges

Now, define:

$w_r = \dfrac {z^r} {r!}$
By Limit to Infinity of Binomial Coefficient over Power:

$\ds \lim_{n \mathop \to \infty} \map {v_r} n = w_r$

Hence:














\(\ds \lim_{n \mathop \to \infty} \paren {1 + \frac z n}^n\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{r \mathop = 0}^n \map {v_r} n\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^\infty w_r\)





Tannery's Theorem, with $p_n = n$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)









$\blacksquare$





