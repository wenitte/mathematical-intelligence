# 

Source: https://proofwiki.org/wiki/Characterization_of_Euclidean_Borel_Sigma-Algebra/Open_equals_Rectangle

Theorem
Let $\OO^n$ be the collection of open subsets of the Euclidean space $\struct {\R^n, \tau}$.
Let $\JJ_{ho}^n$ be the collection of half-open rectangles in $\R^n$.

Then:

$\map \sigma {\OO^n} = \map \sigma {\JJ_{ho}^n}$
where $\sigma$ denotes generated $\sigma$-algebra.


Proof
Let $\horectr {\mathbf a} {\mathbf b} \in \JJ^n_{ho}$.
Then:

$\horectr {\mathbf a} {\mathbf b} = \paren {\openint \gets {\mathbf b} } \cap \horectr {\mathbf a} \to$
provides a way of writing this half-open $n$-rectangle as an intersection of an open and a closed set.
By Characterization of Euclidean Borel Sigma-Algebra/Open equals Closed, these are both in $\map \BB {\R^n}$, and so Sigma-Algebra Closed under Intersection yields:

$\horectr {\mathbf a} {\mathbf b} \in \map \sigma {\OO^n}$
Hence, by definition of generated $\sigma$-algebra:

$\map \sigma {\JJ^n_{ho} } \subseteq \map \sigma {\OO^n}$

Denote $\mathbf 1 = \tuple {1, \ldots, 1} \in \R^n$.
Define, for all $k \in \N$, $\map \SS k$ by:

$\map \SS k := \set {\horectr {2^{-k} \mathbf j} {2^{-k} \paren {\mathbf j + \mathbf 1} } : \mathbf j \in \Z^n}$
It is immediate that $\ds \bigcup \map \SS k = \R^n$ and $\map \SS k \subseteq \JJ^n_{ho}$.
Also, $\map \SS k$ is countable from Cartesian Product of Countable Sets is Countable.

Now define, again for all $k \in \N$, $U_k$ by:

$\ds U_k := \bigcup \set {S \in \map \SS k: S \subseteq U}$
From Set Union Preserves Subsets:

$U_k \subseteq U$

Also, $U_k \in \map \sigma {\JJ^n_{ho} }$ since the union is countable.
It follows that also $\ds \bigcup_{k \mathop \in \N} U_k \in \map \sigma {\JJ^n_{ho} }$.
Next, it is to be shown that $\ds \bigcup_{k \mathop \in \N} U_k = U$.
Note that Set Union Preserves Subsets ensures $\ds \bigcup_{k \mathop \in \N} U_k \subseteq U$.
For the converse, let $\mathbf x \in U$.
As $U$ is open, there exists an $\epsilon > 0$ such that the open ball $\map {B_\epsilon} {\mathbf x}$ is contained in $U$.
Fix $k \in \N$ such that $\sqrt n \, 2^{-k} < \epsilon$, and find $\mathbf j \in \Z^n$ such that:

$\mathbf x \in \horectr {2^{-k} \mathbf j} {2^{-k} \paren {\mathbf j + \mathbf 1} }$
Now it is to be shown that:

$\horectr {2^{-k} \mathbf j} {2^{-k} \paren {\mathbf j + \mathbf 1} } \subseteq \map {B_\epsilon} {\mathbf x}$
To this end, observe that for any $\mathbf y \in \horectr {2^{-k} \mathbf j} {2^{-k} \paren {\mathbf j + \mathbf 1} }$, it holds that:

$\map d {\mathbf x, \mathbf y} \le \map \diam {\horectr {2^{-k} \mathbf j} {2^{-k} \paren {\mathbf j + \mathbf 1} } }$
by definition of diameter.
Now from Diameter of Rectangle, the right hand side equals:

$\norm {2^{-k} \paren {\mathbf j + \mathbf 1} - 2^{-k} \mathbf j} = \norm {2^{-k} \mathbf 1} = \sqrt n \, 2^{-k}$
which is smaller than $\epsilon$ by the way $k$ was chosen.

Hence:

$\horectr {2^{-k} \mathbf j} {2^{-k} \paren {\mathbf j + \mathbf 1} } \subseteq \map {B_\epsilon} {\mathbf x}$
and so every $\mathbf x \in U$ is contained in some $U_k$.
Thus it follows that $U \subseteq \ds \bigcup_{k \mathop \in \N} U_k$.

Thereby we have shown that:

$\map \sigma {\JJ^n_{ho} } = \map \sigma {\OO^n}$
$\blacksquare$





