# 

Source: https://proofwiki.org/wiki/Pullback_as_Equalizer/Corollary

Corollary to Pullback as Equalizer
Let $\mathbf C$ be a metacategory.
Suppose $\mathbf C$ has all binary products and all equalizers.

Then $\mathbf C$ has all pullbacks.


Proof
Let $f: A \to C$ and $g: B \to C$ be morphisms of $\mathbf C$ with common codomain.
By assumption on $\mathbf C$, there exists a binary product $A \times B$ with projections $\pi_1: A \times B \to A$ and $\pi_2: A \times B \to B$.
Again by assumption on $\mathbf C$, there exists an equalizer $e: P \to A \times B$ of $f \circ \pi_1$ and $g \circ \pi_2$.

From Pullback as Equalizer, the pullback of $f$ and $g$ is given by:

$\begin{xy}\xymatrix@+1em{
P
 \ar[r]^*+{p_1}
 \ar[d]_*+{p_2}

&

A
 \ar[d]^*+{f}

\\

B
 \ar[r]_*+{g}

&

C

}\end{xy}$
where $p_1 = \pi_1 \circ e$ and $p_2 = \pi_2 \circ e$.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.2$: Corollary $5.6$




