# 

Source: https://proofwiki.org/wiki/Jordan_Curve_and_Jordan_Arc_form_Two_Jordan_Curves/Corollary

Corollary to Jordan Curve and Jordan Arc form Two Jordan Curves
Let $\gamma: \closedint a b \to \R^2$ be a Jordan curve,  where $\closedint a b$ is the closed real interval between $a, b \in \R$ with $a < b$.
Let the interior of $\gamma$ be denoted $\map {\operatorname {Int} } \gamma$.
Let the image of $\gamma$ be denoted $\Img \gamma$.

Let $\sigma: \closedint c d \to \R^2$ be a Jordan arc such that:

$\map \sigma c, \map \sigma d \in \Img \gamma$
and:

$\forall t \in \openint c d: \map \sigma t \in \map {\operatorname {Int} } \gamma$
Let $t_1 = \map {\gamma^{-1} } {\map \sigma c}$.
Let $t_2 = \map {\gamma^{-1} } {\map \sigma d}$.
Let $t_1 < t_2$.

Define:

$-\sigma: \closedint c d \to \Img \sigma$ by $-\map \sigma t = \map \sigma {c + d - t}$
Let $*$ denote concatenation of paths.
Let $\gamma \restriction_{\closedint a {t_1} }$ denote the restriction of $\gamma$ to $\closedint a {t_1}$.

Define:

$\gamma_1 = \gamma {\restriction_{\closedint a {t_2} } } * \paren {-\sigma} * \gamma {\restriction_{\closedint {t_1} b} }$
Define:

$\gamma_2 = \gamma {\restriction_{\closedint {t_2} {t_1} } } * \sigma$

Then $\gamma_1$ and $\gamma_2$ are Jordan curves such that:

$\Int {\gamma_1} \cup \Int {\gamma_2} \cup \paren { \Img \sigma \setminus \set { \map \sigma c , \map \sigma d } } = \Int \gamma$


Proof
We prove that $\gamma_1, \gamma_2$ are Jordan curves in the same way as in the proof of Jordan Curve and Jordan Arc form Two Jordan Curves.
Then, it follows from the defintions of $\sigma$ that $\Img {\gamma_1}, \Img {\gamma_2}$ are identical in this corollary and in the main theorem.
As the interior and exterior of Jordan curves only depend on their images, the conclusion of this corollary follows from the main theorem.
$\blacksquare$





