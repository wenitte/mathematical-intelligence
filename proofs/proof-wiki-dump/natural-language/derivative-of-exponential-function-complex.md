# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_Function/Complex


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
The complex exponential function is its own derivative.
That is:

$\map {D_z} {\exp z} = \exp z$


Proof from Sequence Definition
Take the definition of $\exp$ to be the limit of the sequence $\sequence {E_n}$ defined by:

$\ds \map {E_n} z = \paren {1 + \dfrac z n}^n$
Then  $\left \langle{E_n}\right \rangle$ is uniformly convergent on compact subsets of $\C$.
Further, $\C$ is an  open,  connected subset of $\C$.
So the hypotheses of  Derivative of Sequence of Holomorphic Functions are satisfied.
Hence:














\(\ds \map {D_z} {\exp z}\)

\(=\)







\(\ds \map {D_z} {\paren {1 + \dfrac z n}^n}\)





Definition of Complex Exponential Function














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {D_z} {\paren {1 + \dfrac z n}^n}\)





Derivative of Sequence of Holomorphic Functions














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {n \paren {1 + \dfrac z n}^{n - 1} \times \frac 1 n}\)





Chain Rule














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {1 + \dfrac z n}^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\paren {1 + \dfrac z n}^n \times \frac n {n + z} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\lim_{n \mathop \to \infty} \paren {1 + \dfrac z n}^n} \times \paren {\lim_{n \mathop \to \infty} \frac n {n + z} }\)





Complex Derivative of Product is Product of Complex Derivative














\(\ds \)

\(=\)







\(\ds \exp z \times 1\)





Definition of Complex Exponential Function



Hence the result.
$\blacksquare$





