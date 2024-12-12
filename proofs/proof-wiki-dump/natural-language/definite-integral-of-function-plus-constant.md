# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Function_plus_Constant

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.
Let $c$ be a constant.

Then:

$\ds \int_a^b \paren {\map f t + c} \rd t = \int_a^b \map f t \rd t + c \paren {b - a}$


Proof
Let $P = \set {x_0, x_1, x_2, \ldots, x_n}$ be a finite subdivision of $\closedint a b$.
Let $\map {L^{\paren {f + c} } } P$ be the lower Darboux sum of $\map f x + c$ on $\closedint a b$ belonging to $P$.
Let:

$\ds m_k^{\paren {f + c} } = \map {\inf_{x \mathop \in \closedint {x_{k - 1} } {x_k} } } {\map f x + c}$
where $k \in \set {0, 1, \ldots, n}$.

So:














\(\ds m_k^{\paren {f + c} }\)

\(=\)







\(\ds \map {\inf_{x \mathop \in \closedint {x_{k - 1} } {x_k} } } {\map f x + c}\)




















\(\ds \)

\(=\)







\(\ds c + \map {\inf_{x \mathop \in \closedint {x_{k - 1} } {x_k} } } {\map f x}\)




















\(\ds \)

\(=\)







\(\ds c + m_k^{\paren f}\)










It follows that:














\(\ds \map {L^{\paren {f + c} } } P\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n {m_k^{\paren {f + c} } } \paren {x_k - x_{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n m_k^{\paren f} \paren {x_k - x_{k - 1} } + c \sum_{k \mathop = 1}^n \paren {x_k - x_{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \map {L^{\paren f} } P + c \paren {b - a}\)





as $\ds \sum_{k \mathop = 1}^n \paren {x_k - x_{k - 1} }$ telescopes




So from the definition of definite integral, it follows that:














\(\ds \int_a^b \paren {\map f t + c} \rd t\)

\(=\)







\(\ds \map {\sup_P} {\map {L^{\paren {f + c} } } P}\)




















\(\ds \)

\(=\)







\(\ds \map {\sup_P} {\map {L^{\paren f} } P + c \paren {b - a} }\)




















\(\ds \)

\(=\)







\(\ds \map {\sup_P} {\map {L^{\paren f} } P} + c \paren {b - a}\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \map f t \rd t + c \paren {b - a}\)









$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.7$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.8$: Integration




