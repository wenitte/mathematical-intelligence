# 

Source: https://proofwiki.org/wiki/Identity_Morphism_of_Product

Theorem
Let $\mathbf C$ be a metacategory.
Let $C$ and $D$ be objects of $\mathbf C$, and let $C \times D$ be a binary product for $C$ and $D$.

Then:

$\operatorname{id}_{\paren {C \mathop \times D} } = \operatorname{id}_C \times \operatorname{id}_D$
where $\operatorname{id}$ denotes an identity morphism, and $\times$ signifies a product of morphisms.


Proof
By definition of the product morphism $\operatorname{id}_C \times \operatorname{id}_D$, it is the unique morphism making:
$\quad\quad \begin{xy}\xymatrix@+1em@L+5px{
C
\ar[d]_*+{\operatorname{id}_C}
&
C \times D
\ar[l]_*+{\pr_1}
\ar[r]^*+{\pr_2}
\ar@{-->}[d]^*+{\operatorname{id}_C \times \operatorname{id}_D}
&
D
\ar[d]^*+{\operatorname{id}_D}
\\
C
&
C \times D
\ar[l]^*+{\pr_1}
\ar[r]_*+{\pr_2}
&
D
}\end{xy}$
a commutative diagram.
It is immediate by the behaviour of identity morphisms that $\operatorname{id}_{\paren {C \mathop \times D} }$ is the unique morphism sought.
$\blacksquare$





