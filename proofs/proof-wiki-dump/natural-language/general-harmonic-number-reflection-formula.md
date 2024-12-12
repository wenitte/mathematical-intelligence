# 

Source: https://proofwiki.org/wiki/General_Harmonic_Number_Reflection_Formula



Theorem
$\harm r {x - 1} + \paren {-1}^r \harm r {-x} = \paren {1 + \paren {-1}^r} \map \zeta r + \dfrac {\paren {-1}^r} {\paren {r - 1}!} \map {\dfrac {\d^{r - 1} } {\d x^{r - 1} } } {\pi \map \cot {\pi x} }$
where:

$\harm r x$ denotes the general harmonic number of order $r$ evaluated at $x$
$\map \zeta r$ is the Riemann zeta function
$r \in \Z_{>0}$ and $x \in \C$ and $x \notin \Z$


Proof
Lemma 1
The expression:

$\harm r {x - 1} + \paren {-1}^r \harm r {-x}$
is defined on the domain $\C \setminus \Z$.
That is, on the set of complex numbers but specifically excluding the integers.
$\Box$


Lemma 2
$\ds \harm 1 {x - 1} - \harm 1 {-x} = -\pi \map \cot {\pi x}$
$\Box$















\(\ds \harm 1 {x - 1} - \harm 1 {-x}\)

\(=\)







\(\ds -\pi \map \cot {\pi x}\)





Lemma $2$








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac {\d^n} {\d x^n} } {\harm 1 {x - 1} - \harm 1 {-x} }\)

\(=\)







\(\ds \map {\dfrac {\d^n} {\d x^n} } {-\pi \map \cot {\pi x} }\)





taking the $n$th derivative of each side








\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {-1}^{n + 1} n! \paren {\map \zeta {n + 1} - \harm {n + 1} {x - 1} } } - \paren {\paren {-1}^{n + 1} n! \paren {\map \zeta {n + 1} - \harm {n + 1} {-x} } \paren {-1}^n}\)

\(=\)







\(\ds \map {\dfrac {\d^n} {\d x^n} } {-\pi \map \cot {\pi x} }\)





Nth Derivative of General Harmonic Number Order One and Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {-1}^r \paren {r - 1}! \paren {\map \zeta r - \harm r {x - 1} } } - \paren {\paren {-1}^r \paren {r - 1}! \paren {\map \zeta r - \harm r {-x} } \paren {-1}^{r - 1} }\)

\(=\)







\(\ds \map {\dfrac {\d^{r - 1} } {\d x^{r - 1} } } {-\pi \map \cot {\pi x} }\)





$n \to r - 1$








\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {\map \zeta r - \harm r {x - 1} } } + \paren {-1}^r \paren {\paren {\map \zeta r - \harm r {-x} } }\)

\(=\)







\(\ds \dfrac {\paren {-1}^r} {\paren {r - 1}! } \map {\dfrac {\d^{r - 1} } {\d x^{r - 1} } } {-\pi \map \cot {\pi x} }\)





multiplying both sides by $\dfrac {\paren {-1}^r} {\paren {r - 1}! }$








\(\ds \leadsto \ \ \)





\(\ds -\map \zeta r \paren {1 + \paren {-1}^r} + \paren {\harm r {x - 1} + \paren {-1}^r \harm r {-x} }\)

\(=\)







\(\ds \dfrac {\paren {-1}^r} {\paren {r - 1}!} \map {\dfrac {\d^{r - 1} } {\d x^{r - 1} } } {\pi \map \cot {\pi x} }\)





multiply both sides by $-1$








\(\ds \leadsto \ \ \)





\(\ds \harm r {x - 1} + \paren {-1}^r \harm r {-x}\)

\(=\)







\(\ds \paren {1 + \paren {-1}^r} \map \zeta r + \dfrac {\paren {-1}^r} {\paren {r - 1}! } \map {\dfrac {\d^{r - 1} } {\d x^{r - 1} } } {\pi \map \cot {\pi x} }\)





adding $\paren {1 + \paren {-1}^r} \map \zeta r$ to both sides




Finally, from the Lemma $1$, we note that:

$\harm r {x - 1} + \paren {-1}^r \harm r {-x}$
is defined on the domain $\C \setminus \Z$.
$\blacksquare$


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $7$. Sums of Powers, Bernoulli Numbers and the Gamma Function




