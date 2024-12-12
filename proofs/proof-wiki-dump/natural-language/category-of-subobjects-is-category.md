# 

Source: https://proofwiki.org/wiki/Category_of_Subobjects_is_Category

Theorem
Let $\mathbf C$ be a metacategory.
Let $C$ be an object of $\mathbf C$.
Let $\map {\mathbf{Sub}_{\mathbf C}} C$ be the category of subobjects of $C$.

Then $\map {\mathbf{Sub}_{\mathbf C}} C$ is a metacategory.


Proof
Let us verify the axioms $(C1)$ up to $(C3)$ for a metacategory.

Let $f: m_1 \to m_2$ and $g: m_2 \to m_3$ be morphisms of $\map {\mathbf{Sub}_{\mathbf C}} C$.
That $g \circ f: m_1 \to m_3$ is again a morphism follows from the following commutative diagram in $\mathbf C$:
$\quad\quad \begin{xy}\xymatrix@+2em{
\operatorname{dom} m_1
\ar[r]_*+{f}
\ar[rd]_*+{m_1}
\ar@/^1pc/[rr]^*+{g \circ f}
&
\operatorname{dom} m_2
\ar[r]_*+{g}
\ar[d]^*+{m_2}
&
\operatorname{dom} m_3
\ar[ld]^*+{m_3}
\\
&
C
}\end{xy}$

For every subobject $m$ of $C$, the diagram:
$\quad\quad \begin{xy}\xymatrix{
\operatorname{dom} m
\ar[r]^*+{\operatorname{id}_m}
\ar[rd]_*+{m}
&
\operatorname{dom} m
\ar[d]^*+{m}
\\
&
C
}\end{xy}$
in $\mathbf C$ commutes, for $\operatorname{id}_m = \operatorname{id}_{\operatorname{dom} m}$, and the latter is an identity morphism in $\mathbf C$.
This last property also immediately proves the required behaviour of $\operatorname{id}_m$ with respect to other morphisms of $\map {\mathbf{Sub}_{\mathbf C}} C$.

Since the composition is inherited from $\mathbf C$, it is necessarily associative.

Hence $\map {\mathbf{Sub}_{\mathbf C}} C$ is a metacategory.
$\blacksquare$


Also see
Category of Subobjects is Preorder Category




