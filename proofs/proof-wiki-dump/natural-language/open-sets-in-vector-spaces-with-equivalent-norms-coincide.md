# 

Source: https://proofwiki.org/wiki/Open_Sets_in_Vector_Spaces_with_Equivalent_Norms_Coincide

Theorem
Let $M_a = \struct {X, \norm {\, \cdot \, }_a}$ and $M_b = \struct {X, \norm {\, \cdot \,}_b}$ be normed vector spaces.
Let $U \subseteq X$ be an open set in $M_a$.
Suppose, $\norm {\, \cdot \, }_a$ and $\norm {\, \cdot \,}_b$ are equivalent norms, i.e. $\norm {\, \cdot \, }_a \sim \norm {\, \cdot \,}_b$.

Then $U$ is also open in $M_b$. 


Proof
By definition of equivalent norms:

$\exists m,M \in \R_{> 0} : m \le M : \forall x \in X:  m \norm x_b \le \norm x_a \le M \norm x_b$
Since $U$ is open in $M_a$:

$\forall x \in U : \exists \epsilon_a \in \R_{> 0} : \map {B_{\epsilon_a}} x \subseteq U$
where $\map {B_{\epsilon_a}} x$ stands for an open ball, defined as:

$\map {B_{\epsilon_a}} x := \set {\forall y \in X : \norm {x - y}_a < \epsilon_a}$
Define an open ball $\map {B_{\epsilon_b}} x$ as:

$\map {B_{\epsilon_b}} x := \set {\forall y \in X : \norm {x - y}_b < \epsilon_b}$
Then we have that:

$m \norm {x - y}_b \le \norm {x - y}_a < \epsilon_a$
So far, $\epsilon_b$ was unspecified.
Define $\epsilon_b := \dfrac {\epsilon_a} m$.
So:

$\forall x \in U : y \in \map {B_{\epsilon_a}} x \implies y \in \map {B_{\epsilon_b}} x$
with $\epsilon_a = m \epsilon_b$.
Hence:

$\forall x \in U : \exists \epsilon_b \in \R_{> 0} : \map {B_{\epsilon_b}} x \subseteq U$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




