# 

Source: https://proofwiki.org/wiki/Infinite_Limit_Theorem



Theorem
Let $f$ be a real function of $x$ of the form 

$\map f x = \dfrac {\map g x} {\map h x}$
Further, let $g$ and $h$ be continuous on some open interval $\mathbb I$, where $c$ is a constant in $\mathbb I$.

If:

$(1): \quad \map g c \ne 0$
$(2): \quad \map h c = 0$
$(3): \quad \forall x \in \mathbb I: x \ne c \implies \map h x \ne 0$
then the limit of $f$ as $x \to c$ will not exist, and:

$\ds \lim_{x \mathop \to c^+} \map f x = +\infty$ or $-\infty$
$\ds \lim_{x \mathop \to c^-} \map f x = +\infty$ or $-\infty$


Proof
To prove the claim, it will suffice to show that for each $N \in \R_{>0}$, one can find an $\epsilon > 0$ such that:

$\size {x - c} < \epsilon \implies \size {\map f x} \ge N$

So fix $N \in \R_{>0}$.
First, by continuity of $g$, find an $\epsilon_1 > 0$ such that:

$\size {x - c} < \epsilon_1 \implies \size {\map g x - \map g c} < \size {\dfrac {\map g c} 2}$
which by corollary $1$ to the Reverse Triangle Inequality implies that:

$\size {x - c} < \epsilon_1 \implies \size {\map g c} - \size {\map g x} < \size {\dfrac {\map g c} 2}$
and by rearranging, this becomes:

$\size {x - c} < \epsilon_1 \implies \size {\map g x} > \size {\dfrac {\map g c} 2}$

Next, by continuity of $h$, find an $\epsilon_2 > 0$ such that $\epsilon_1 > \epsilon_2$ and:

$\size {x - c} < \epsilon_2 \implies \size {\map h x} < \dfrac {\size {\map g c} } {2 N}$
From Ordering of Reciprocals, this means:

$\size {x - c} < \epsilon_2 \implies \dfrac 1 {\size {\map h x} } > \dfrac {2 N} {\size {\map g c} }$

These together imply that, whenever $0 < \size {x - c} < \epsilon_2$, we have:














\(\ds \size {\map f x}\)

\(=\)







\(\ds \size {\frac {\map g x} {\map h x)} }\)




















\(\ds \)

\(=\)







\(\ds \size {\map g x} \cdot \size {\frac 1 {\map h x} }\)




















\(\ds \)

\(>\)







\(\ds \size {\frac {\map g c} 2} \cdot \frac 1 {\size {\map h x} }\)





since $\epsilon_2 < \epsilon_1$














\(\ds \)

\(>\)







\(\ds \size {\frac {\map g c} 2} \cdot \frac {2 N} {\size {\map g c} }\)




















\(\ds \)

\(=\)







\(\ds N\)










Thus $\epsilon_2$ is a valid choice for the sought $\epsilon$.
Hence the result.
$\blacksquare$


Intuition
Consider the graph of the reciprocal function at the origin.
Immediately to the right of the origin, as positive numbers become smaller, the function value becomes larger.
Similarly, immediately to the left of the origin, as the absolute value of negative numbers becomes smaller, the absolute value of the function value becomes larger, that is, more and more negative.


Warning
This theorem is absolutely not saying that $\dfrac c 0 = \infty$ when dealing with real numbers.  Division by Zero is undefined.


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 1.5$




