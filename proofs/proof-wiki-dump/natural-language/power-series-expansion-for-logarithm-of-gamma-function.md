# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Logarithm_of_Gamma_Function

Theorem
The logarithm of the Gamma function has the power series expansion:














\(\ds \map \ln {\map \Gamma {x + 1} }\)

\(=\)







\(\ds -\gamma x + \sum_{k \mathop = 2}^\infty \dfrac {\map \zeta k \paren {-x}^k} k\)




















\(\ds \)

\(=\)







\(\ds -\gamma x + \dfrac {\map \zeta 2 x^2} 2 - \dfrac {\map \zeta 3 x^3} 3 + \dfrac {\map \zeta 4 x^4} 4 - \dfrac {\map \zeta 5 x^5} 5 + \cdots\)









valid for all $x \in \C$ such that $\size x < 1$ and $x = 1$.


Proof













\(\ds \gamma + \frac {\map {\Gamma'} {x + 1} } {\map \Gamma {x + 1} }\)

\(=\)







\(\ds \map H x\)





Extension of Harmonic Number to Non-Integer Argument








\(\ds \leadsto \ \ \)





\(\ds \frac {\map {\Gamma'} {x + 1} } {\map \Gamma {x + 1} }\)

\(=\)







\(\ds -\gamma + \map H x\)





subtracting $\gamma$ from both sides








\(\ds \leadsto \ \ \)





\(\ds \int_0^x \frac {\map {\Gamma'} {x + 1} } {\map \Gamma {x + 1} } \rd x\)

\(=\)







\(\ds \int_0^x \paren {-\gamma + \map H x} \rd x\)





integrating both sides








\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map \Gamma {x + 1} }\)

\(=\)







\(\ds \int_0^x \paren {-\gamma + \map H x} \rd x\)





Definition of Digamma Function and the Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \int_0^x \paren {-\gamma + \sum_{k \mathop = 2}^\infty \paren {-1}^k \map \zeta k x^{k - 1} } \rd x\)





Power Series Expansion for Harmonic Numbers














\(\ds \)

\(=\)







\(\ds \intlimits {-\gamma x + \sum_{k \mathop = 2}^\infty \dfrac {\map \zeta k \paren {-x}^k} k} 0 x\)





Primitive of Power and Primitive of Constant














\(\ds \)

\(=\)







\(\ds -\gamma x + \sum_{k \mathop = 2}^\infty \dfrac {\map \zeta k \paren {-x}^k} k\)










When $x = 1$, we have $\sequence {a_k = \dfrac {\map \zeta k} k}_{k \mathop \ge 0}$ a decreasing sequence of positive terms in $\R$ which converges with a limit of zero.
By the Alternating Series Test, this alternating series converges at $x = 1$.
$\blacksquare$


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $7$. Sums of Powers, Bernoulli Numbers, and the Gamma Function




