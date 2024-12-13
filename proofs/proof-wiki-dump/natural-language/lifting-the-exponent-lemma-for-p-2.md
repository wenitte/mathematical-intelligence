# 

Source: https://proofwiki.org/wiki/Lifting_The_Exponent_Lemma_for_p%3D2


This article needs to be linked to other articles.In particular: Justification for some of the stepsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $x, y \in \Z$ be distinct odd integers.
Let $n \ge 1$ be a natural number.
Let:

$4 \divides x - y$
where $\divides$ denotes divisibility.

Then

$\map {\nu_2} {x^n - y^n} = \map {\nu_2} {x - y} + \map {\nu_2} n$
where $\nu_2$ denotes $2$-adic valuation.


Corollary
Let $x, y \in \Z$ be distinct odd integers.
Let $n \geq1$ be an even natural number.

Then

$\nu_2 \left({x^n - y^n}\right) = \nu_2 \left({x + y}\right) + \nu_2 \left({x - y}\right) + \nu_2 \left({n}\right) - 1$
where $\nu_2$ denotes $2$-adic valuation.


Proof
Let $k = \map {\nu_2} n$.
Then $n = 2^k m$ with $2 \nmid m$.
By P-adic Valuation of Difference of Powers with Coprime Exponent:

$\map {\nu_2} {x^n - y^n} = \map {\nu_2} {x^{2^k} - y^{2^k} }$
Note that:

$x^{2^k} - y^{2^k} = \paren {x - y} \cdot \ds \prod_{i \mathop = 0}^{k - 1} \paren {x^{2^i} + y^{2^i} }$
By Square Modulo 4:

$\map {\nu_2} {x^{2^i} + y^{2^i} } = 1$
for $i > 0$.
Because $4 \divides \paren {x - y}$, $4 \nmid \paren {x + y}$.
Thus:

$\map {\nu_2} {x + y} = 1$
Thus:














\(\ds \map {\nu_2} {x^{2^k} - y^{2^k} }\)

\(=\)







\(\ds \map {\nu_2} {x - y} + \sum_{i \mathop = 0}^{k - 1} \map {\nu_2} {x^{2^i} + y^{2^i} }\)





p-adic Valuation is Additive














\(\ds \)

\(=\)







\(\ds \map {\nu_2} {x - y} + k\)









$\blacksquare$


Also see
Lifting The Exponent Lemma
Lifting The Exponent Lemma for Sums for p=2




