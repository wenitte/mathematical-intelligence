# 

Source: https://proofwiki.org/wiki/Bases_of_Vector_Space_have_Equal_Cardinality



Theorem
Let $R$ be a division ring.
Let $V$ be a vector space over $R$.
Let $X$ and $Y$ be bases of $V$.

Then $X$ and $Y$ are equivalent.
That is, $X$ and $Y$ have the same cardinality.


Proof
We will first prove that there is an injection from $X$ to $Y$.

Let $x \in X$.
By Expression of Vector as Linear Combination from Basis is Unique: General Result, there is a unique finite subset $C_x$ of $R \times Y$ such that:

$\ds x = \sum_{\tuple {r, v} \mathop \in C_x} r \cdot v$ and
$\forall \tuple {r, v} \in C_x: r \ne 0_R$
Define $\Phi: X \to \powerset Y$ by:

$\map \Phi x := \Img {C_x}$

We next show that $\sequence {\map \Phi x}_{x \mathop \in X}$ satisfies the marriage condition. 
That is, for every finite subset $F$ of $X$:

$\ds \card F \le \card {\bigcup \map \Phi F}$
Since $X$ is a basis, it is linearly independent.
By Subset of Linearly Independent Set is Linearly Independent, $F$ is also linearly independent.
By the definition of $\Phi$:

$\ds F \subseteq \span \bigcup \map \Phi F$.
By Finite Union of Finite Sets is Finite, $\ds \bigcup \map \Phi F$ is finite.
Thus by Size of Linearly Independent Subset is at Most Size of Finite Generator:

$\ds \size F \le \size {\bigcup \map \Phi F}$

By Hall's Marriage Theorem, there is an injection from $X$ into $Y$.
Precisely the same argument with $X$ and $Y$ interchanged shows that there is an injection from $Y$ into $X$ as well.
Thus by the Cantor-Bernstein-Schröder Theorem, $X$ and $Y$ are equivalent.
$\blacksquare$


Boolean Prime Ideal Theorem
This proof depends on the Boolean Prime Ideal Theorem (BPI), by way of Hall's Marriage Theorem/General Set.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Also known as
Some authors refer to this as the dimension theorem for vector spaces, but it should not be confused with e.g. the Rank Plus Nullity Theorem.


Also see
Bases of Finitely Generated Vector Space have Equal Cardinality


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): basis (plural bases)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): basis (plural bases)
For a video presentation of the contents of this page, visit the Khan Academy.




