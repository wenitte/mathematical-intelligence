# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Dirac_Delta_Function/Proof_3



Theorem
Let $\map \delta t$ denote the Dirac delta function.

The Laplace transform of $\map \delta t$ is given by:

$\laptrans {\map \delta t} = 1$


Proof
Lemma
Let $F_\epsilon: \R \to \R$ be the real function defined as:

$\map {F_\epsilon} t = \begin{cases} 0 & : x < 0 \\ \dfrac 1 \epsilon & : 0 \le t \le \epsilon \\ 0 & : t > \epsilon \end{cases}$
Then:

$\laptrans {\map {F_\epsilon} t} = \dfrac {1 - e^{-s \epsilon} } {\epsilon s}$
$\Box$

Then:














\(\ds \laptrans {\map \delta t}\)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} \laptrans {\map {F_\epsilon} t}\)





Definition 1 of Dirac Delta Function














\(\ds \)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} \dfrac {1 - e^{-s \epsilon} } {\epsilon s}\)





Lemma














\(\ds \)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} \dfrac {\map {\dfrac \d {\d s} } {1 - e^{-s \epsilon} } } {\map {\dfrac \d {\d s} } {\epsilon s} }\)





L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} \dfrac {\paren {-\epsilon} \times \paren {-e^{-s \epsilon} } } \epsilon\)




















\(\ds \)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} e^{-s \epsilon}\)





simplification














\(\ds \)

\(=\)







\(\ds 1\)





Exponential of Zero



$\blacksquare$


Warning
Mathematically speaking, $\ds \lim_{\epsilon \mathop \to 0} \map {F_\epsilon} t$ does not actually exist.
Hence $\ds \laptrans {\lim_{\epsilon \mathop \to 0} \map {F_\epsilon} t}$ is not actually defined.
However, it is useful to consider $\map \delta t = \ds \lim_{\epsilon \mathop \to 0} \map {F_\epsilon} t$ to be such that $\laptrans {\map \delta t} = 1$.


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Impulse Functions. The Dirac Delta Function: $42 \ \text{(a)}$




