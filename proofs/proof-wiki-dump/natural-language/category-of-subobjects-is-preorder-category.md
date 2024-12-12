# 

Source: https://proofwiki.org/wiki/Category_of_Subobjects_is_Preorder_Category



Theorem
Let $\mathbf C$ be a metacategory.
Let $C$ be an object of $\mathbf C$.
Let $\map {\mathbf{Sub}_{\mathbf C} } C$ be the category of subobjects of $C$.

Then $\map {\mathbf{Sub}_{\mathbf C} } C$ is a preorder category.


Proof
By Category of Subobjects is Category, we know $\map {\mathbf{Sub}_{\mathbf C} } C$ is a metacategory.
By definition of preorder category, it suffices to show that if $f, g: m \to m'$ are morphisms with the same domain and codomain, then $f = g$.

The situation is sketched by the following commutative diagram in $\mathbf C$:
$\quad\quad \begin{xy}\xymatrix@+1em{
\Dom m
\ar[r]<2pt>^*+{f}
\ar[r]<-2pt>_*+{g}
\ar[rd]_*+{m}
&
\Dom {m'}
\ar[d]^*+{m'}
\\
&
C
}\end{xy}$
Thus, we see that $m' \circ f = m = m' \circ g$.
Now $m'$ is a subobject, and a fortiori a monomorphism.
Hence $f = g$, and $\map {\mathbf{Sub}_{\mathbf C} } C$ is a preorder category.
$\blacksquare$


Also see
Inclusion Relation on Subobjects


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.1$




