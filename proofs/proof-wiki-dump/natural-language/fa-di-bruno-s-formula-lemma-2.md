# 

Source: https://proofwiki.org/wiki/Fa%C3%A0_di_Bruno%27s_Formula/Lemma_2

Theorem
Let $m \in \Z_{\ge 1}$ be a (strictly) positive integer.
Let $k_m \in \Z_{\ge 1}$ also be a (strictly) positive integer.
Let $u: \R \to \R$ be a function of $x$ which is appropriately differentiable.
Then:

$\ds \map {D_x} {\prod_{m \mathop = 1}^r \paren {\dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } } } = \prod_{m \mathop = 1}^r \paren {\dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } } \sum_{m \mathop = 1}^r k_m \dfrac {D_x^{m + 1} u} {D_x^m u}$


Proof













\(\ds \)

\(\)







\(\ds \map {D_x} {\prod_{m \mathop = 1}^r \paren {\dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } } }\)




















\(\ds \)

\(=\)







\(\ds \prod_{m \mathop = 1}^r \paren {\dfrac 1 {k_m! \paren {m!}^{k_m} } } \map {D_x} {\prod_{m \mathop = 1}^r \paren {\paren {D_x^m u}^{k_m} } }\)




















\(\ds \)

\(=\)







\(\ds \prod_{m \mathop = 1}^r \paren {\dfrac 1 {k_m! \paren {m!}^{k_m} } } \sum_{m \mathop = 1}^r \paren {\map {D_x} {\paren {D_x^m u}^{k_m} } \prod_{s \mathop \ne m} \paren {\paren {D_x^s u}^{k_s} } }\)





Product Rule for Derivatives: General Result














\(\ds \)

\(=\)







\(\ds \prod_{m \mathop = 1}^r \paren {\dfrac 1 {k_m! \paren {m!}^{k_m} } } \sum_{m \mathop = 1}^r \paren {\paren {k_m \paren {D_x^m u}^{k_m - 1} D_x^{m + 1} u} \prod_{s \mathop \ne m} \paren {\paren {D_x^s u}^{k_s} } }\)





Faà di Bruno's Formula: Lemma 1














\(\ds \)

\(=\)







\(\ds \prod_{m \mathop = 1}^r \paren {\dfrac 1 {k_m! \paren {m!}^{k_m} } } \sum_{m \mathop = 1}^r k_m \dfrac {D_x^{m + 1} u} {D_x^m u} \prod_{m \mathop = 1}^r \paren {\paren {D_x^m u}^{k_m} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{m \mathop = 1}^r \paren {\dfrac {\paren {D_x^m u}^{k_m} } {k_m! \paren {m!}^{k_m} } } \sum_{m \mathop = 1}^r k_m \dfrac {D_x^{m + 1} u} {D_x^m u}\)









$\blacksquare$





