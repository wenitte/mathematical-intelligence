# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Dirac_Delta_Function



Theorem
Let $\map \delta t$ denote the Dirac delta function.

The Laplace transform of $\map \delta t$ is given by:

$\laptrans {\map \delta t} = 1$


Proof 1













\(\ds \laptrans {\map \delta t}\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \map \delta t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds e^{-s \times 0}\)





Integral to Infinity of Dirac Delta Function by Continuous Function














\(\ds \)

\(=\)







\(\ds e^0\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Proof 2
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







\(\ds \lim_{\epsilon \mathop \to 0} \dfrac 1 {\epsilon s} \paren {1 - \paren {1 - s \epsilon + \dfrac {s^2 \epsilon^2} {2!} - \dotsb} }\)





Definition of Exponential Function














\(\ds \)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} \paren {1 - \dfrac {s \epsilon} {2!} + \dotsb}\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Proof 3
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
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of Special Functions: $12$



