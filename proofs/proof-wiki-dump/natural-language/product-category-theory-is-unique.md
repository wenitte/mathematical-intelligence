# 

Source: https://proofwiki.org/wiki/Product_(Category_Theory)_is_Unique

Theorem
Let $\mathbf C$ be a metacategory.
Let $A$ and $B$ be objects of $\mathbf C$.

Let $A \times B$ and $A \times' B$ both be products of $A$ and $B$.
Then there is a unique isomorphism $u: A \times B \to A \times' B$.

That is, products are unique up to unique isomorphism.


This article is complete as far as it goes, but it could do with expansion.In particular: cover extended theorem (for general def)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
Denote the implicit projections of the two products by:


$\begin{xy}\xymatrix@C=2em@L+4mu{
&
 A \times B
  \ar@/_/[ddl]_*{\textrm{pr}_1}
  \ar@/^/[ddr]^*{\textrm{pr}_2}

\\ &
 A \times' B
  \ar[dl]^*{\textrm{pr}'_1}
  \ar[dr]_*{\textrm{pr}'_2}

\\
 A
& &
 B
}\end{xy}$


By the UMP of $A \times' B$, there is a unique $u: A \times B \to A \times' B$ fitting the dashed arrow in:


$\begin{xy}\xymatrix@C=2em@L+4mu{
&
 A \times B
  \ar@/_/[ddl]_*{\textrm{pr}_1}
  \ar@/^/[ddr]^*{\textrm{pr}_2}
  \ar@{-->}[d]
\\ &
 A \times' B
  \ar[dl]^*{\textrm{pr}'_1}
  \ar[dr]_*{\textrm{pr}'_2}

\\
 A
& &
 B
}\end{xy}$


By the UMP of $A \times B$, there is a further unique $v: A \times' B \to A \times B$ fitting the dashed arrow in:


$\begin{xy}\xymatrix@C=2em@L+4mu{
&
 A \times B
  \ar@/_/[ddl]_*{\textrm{pr}_1}
  \ar@/^/[ddr]^*{\textrm{pr}_2}
  \ar[d]^*{u}
\\ &
 A \times' B
  \ar[dl]^*{\textrm{pr}'_1}
  \ar[dr]_*{\textrm{pr}'_2}
  \ar@{-->}[d]
\\
 A
&
 A \times B
  \ar[l]^*{\textrm{pr}_1}
  \ar[r]_*{\textrm{pr}_2}
&
 B
}\end{xy}$


We can now form the following diagram:


$\begin{xy}\xymatrix@C=2em@R=3em@L+4mu{
 &
A \times B
  \ar[dl]_*{\textrm{pr}_1}
  \ar[dr]^*{\textrm{pr}_2}
  \ar@{-->}[d]
\\
 A
&
 A \times B
  \ar[l]^*{\textrm{pr}_1}
  \ar[r]_*{\textrm{pr}_2}
&
 B
}\end{xy}$


where we see both the identity morphism $\operatorname{id}_{A \times B}$ and $v \circ u$ fit the dashed arrow.
The UMP of $A \times B$ however states that there is a unique fitting morphism.
Hence $v \circ u = \operatorname{id}_{A \times B}$.

That $u \circ v = \operatorname{id}_{A \times' B}$ follows, mutatis mutandis, by interchanging $A \times B$ and $A \times' B$.
Hence there is a unique isomorphism $u: A \times B \to A \times' B$, as desired.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.4$: Proposition $2.17$




