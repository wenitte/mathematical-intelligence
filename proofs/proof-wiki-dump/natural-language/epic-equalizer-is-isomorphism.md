# 

Source: https://proofwiki.org/wiki/Epic_Equalizer_is_Isomorphism

Theorem
Let $\mathbf C$ be a metacategory.
Let $e: E \to C$ be the equalizer of two morphisms $f, g: C \to D$.
Let $e$ be an epimorphism.

Then $e$ is an isomorphism.


Proof
As $e$ equalises $f$ and $g$, $f \circ e = g \circ e$.
Since $e$ is epic, it follows that $f = g$.

Then in the equaliser diagram: 

$\begin{xy}\xymatrix{
E 
 \ar[r]^*{e}

&

A
 \ar[r]<2pt>^*{f}
 \ar[r]<-2pt>_*{g} 

&

B

\\

A
 \ar@{.>}[u]^*{k}
 \ar[ur]_*{\operatorname{id}_A}

}\end{xy}$
We have that:

$f \circ 1_A = g \circ 1_A$
so there is a unique $k$ with $e \circ k = \operatorname{id}_A$.
Then:














\(\ds e \circ k \circ e\)

\(=\)







\(\ds {\operatorname {id}_A} \circ e\)




















\(\ds \)

\(=\)







\(\ds e\)




















\(\ds \)

\(=\)







\(\ds e \circ \operatorname{id}_E\)










By Equalizer is Monomorphism, it follows that $k \circ e = \operatorname{id}_E$.
This gives $k$ as an inverse to $e$.
Thus $e$ is an isomorphism.
$\blacksquare$


Sources
1984: Robert Goldblatt: Topoi: The Categorical Analysis of Logic: $\S 3.10$: Theorem $2$




