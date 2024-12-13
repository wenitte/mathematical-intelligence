# 

Source: https://proofwiki.org/wiki/Piecewise_Combination_of_Measurable_Mappings_is_Measurable/General_Case

Theorem
Let $\struct {X, \Sigma}$ and $\struct {X', \Sigma'}$ be measurable spaces.
Let $\sequence {E_n}_{n \mathop \in \N} \in \Sigma, \ds \bigcup_{n \mathop \in \N} E_n = X$ be a countable cover of $X$ by $\Sigma$-measurable sets.
For each $n \in \N$, let $f_n: E_n \to X'$ be a $\Sigma_{E_n} \, / \, \Sigma'$-measurable mapping.
Here, $\Sigma_{E_n}$ is the trace $\sigma$-algebra of $E_n$ in $\Sigma$.

Suppose that for every $m, n \in \N$, $f_m$ and $f_n$ satisfy:

$(1): \quad f_m \restriction_{E_m \cap E_n} = f_n \restriction_{E_m \cap E_n}$
that is, $f_m$ and $f_n$ coincide whenever both are defined; here $\restriction$ denotes restriction.

Define $f: X \to X'$ by:

$\ds \forall n \in \N, x \in E_n: \map f x := \map {f_n} x$

Then $f$ is a $\Sigma \, / \, \Sigma'$-measurable mapping.


Proof
First, note that $f$ is well-defined, since if $x \in E_n$ and $x \in E_m$, we have that:

$\map {f_n} x = \map f x = \map {f_m} x$
by $(1)$, since $x \in E_n \cap E_m$.

Let $E' \in \Sigma'$.
Then by definition of preimage, $f^{-1} \sqbrk {E'} \subseteq X$, and hence:














\(\ds f^{-1} \sqbrk {E'}\)

\(=\)







\(\ds X \cap h^{-1} \sqbrk {E'}\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{n \mathop \in \N} E_n} \cap f^{-1} \sqbrk {E'}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop \in \N} \paren {E_n \cap f^{-1} \sqbrk {E'} }\)





Intersection Distributes over Union: General Result














\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop \in \N} {f_n}^{-1} \sqbrk {E'}\)









The last step we derive as follows.
Whenever $x \in E_n$, we have by definition of $f$ that $\map f x = \map {f_n} x$.
Hence, $x \in E_n \cap f^{-1} \sqbrk {E'}$ implies $x \in {f_n}^{-1} \sqbrk {E'}$.
Conversely, if $x \in {f_n}^{-1} \sqbrk {E'}$, that is $\map {f_n} x \in E'$, then $x \in E_n$ since $E_n$ is the domain of $f_n$.
By definition of $f$ then also $\map f x = \map {f_n} x \in E'$.
Hence we have deduced that $E_n \cap f^{-1} \sqbrk {E'} = {f_n}^{-1} \sqbrk {E'}$.

Since all $f_n$ are $\Sigma_{E_n} \, / \, \Sigma'$-measurable, it follows that for all $n \in \N$:

${f_n}^{-1} \sqbrk {E'} \in \Sigma$
By $\sigma$-algebra axiom $(3)$, it follows that:

$f^{-1} \sqbrk {E'} = \ds \bigcup_{n \mathop \in \N} {f_n}^{-1} \sqbrk {E'} \in \Sigma$

Since $E' \in \Sigma'$ was arbitrary, it follows that $f$ is $\Sigma \, / \, \Sigma'$-measurable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 8$: Problem $3 \ \text{(ii)}$




