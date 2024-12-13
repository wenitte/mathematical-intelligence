# 

Source: https://proofwiki.org/wiki/Least_Upper_Bound_Property



Theorem
Let $S \subset \R$ be a non-empty subset of the set of real numbers such that $S$ is bounded above.
Then $S$ admits a supremum in $\R$.
This is known as the least upper bound property of the real numbers.


Proof 1
Suppose that $S \subseteq \R_{\ge 0}$ has the positive real number $U$ as an upper bound.
Then $\R_{\ge 0}$ can be represented as a straight line $L$ whose sole endpoint is the point $O$. 
Let $l_0 \in \R_{\ge 0}$ be the standard unit of length.
There exists a unique point $X \in L$ such that $U \cdot l_0 = OX$.
Furthermore, if $x \in S$, then:

$\map f x = x \cdot l_0$
where $\cdot$ denotes (real) multiplication.


Segments of Finite Lines are Finite
No line segment of $OX$ is infinite. 
For suppose that the segment $s$ of $OX$ is infinite.
Then $s$ is greater than every line segment, including any line four times greater than $OX$.
Therefore the less contains the greater: which is impossible.
$\Box$


Existence of Second Endpoint of a Segment of $OX$ beginning at $O$
More precisely, every line segment $s$ of $OX$ having $O$ as one of its endpoints must have another endpoint within $OX$.
The second endpoint of $s$ of $OX$ must exist. 
For if the second endpoint does not exist, then $s$ can be continued to any length however great and still remain a segment of $OX$.


This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
But then $s$ can be made over four times as great as $OX$, and still remain a segment of $OX$: which is impossible. 
Therefore the second endpoint exists. 
$\Box$


Both Endpoints of a Segment of a Line lie Within the Line
Every point of a segment of a straight line $ab$ lies within $ab$.  
This second endpoint must be within $OX$.
$\Box$


Formation of the Set $S^*$ Corresponding to the Set $S$
Therefore for every $x \in S$, there is a unique point $\map w x$ such that:

$\map f x = O \cdot \map w x = x \cdot l_0$
Thus let $S^*$ be the corresponding set of all respective line segments:

$\map f x = O \cdot \map w x$
for all $x \in S$. 
We have that $OX$ is greater than or equal to every line segment of $S^*$. 
Therefore $OX$ contains every line segment of $S^*$.
And for any two line segments $P, Q$ of $L$ with an endpoint at $O$, either:

$P, Q$ are identical
$P \subset Q$ but $Q \not \subset P$
or:

$Q \subset P$ but $P \not \subset Q$.
Also:

$P \subset Q, Q \not \subset P \iff P > Q$
The same can be proven for any other upper bound $OY$ in $S^*$.


Definition of $\Lambda$
Let $\Lambda$ be the union of all line segments of $S^*$. 


Existence of $\Lambda$
Let $x \in S$.
Then:

$\map f x = O \cdot \map w x$
The point $O$ is an element of $O \cdot \map w x$. 
Therefore there is a point $p$ contained in at least one line segment of $S^*$. 
But then there must exist an exhaustive and complete figure $F$ containing only all of those points $p$ contained in at least one line segment of $S^*$. 
Set theory shows that this figure $F$ is precisely $\Lambda$.


This article contains statements that are justified by handwavery.In particular: The above needs to be clarified and explained with reference to set-theoretical proofs.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

$\Box$


Continuity of $\Lambda$
$\Lambda$ is everywhere continuous.


This article, or a section of it, needs explaining.In particular: Define "continuous" in this context.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
For, given $p, q \in \Lambda$, such that $p$ and $q$ do not coincide, either $Op > Oq$ or $Op < Oq$. 

Without loss of generality, let $p$ be less distant from $O$ than $q$.
Then:

$\exists x, h \in \R_{\ge 0}: x \in S \land x + h \in S \land p \in O \cdot \map w x \land q \in O \cdot \map w {x + h}$.
But:

$O \cdot \map w x \subset O \cdot \map w {x + h}$
Therefore:

$p, q \in O \cdot \map w {x + h}$
Therefore $O \cdot \map w {x + h}$ contains every point in between $p, q \in \Lambda$.

Thus suppose $r$ is between $p, q$. 
Therefore:

$r \in O \cdot \map w {x + h}$
But:

$O \cdot \map w {x + h} \in S^*$
Also, $\Lambda$ contains all $p$ in at least one $O \cdot \map w x \in S^*$
Therefore:

$r \in O \cdot \map w {x + h}$
Therefore:

$\forall p, q \in \Lambda: \forall r: p < r < q: r \in \Lambda$
Therefore $\Lambda$ is everywhere continuous. 
$\Box$


$\Lambda$ is Finite
$\Lambda \subseteq OX$.
Let $p \in \Lambda$.
Then:

$\exists y \in S: p \in O \cdot \map w y \in S^*$
But it was proven that $OX$ contains every line segment of $S^*$. 
Therefore:

$p \in O \cdot \map w y \subseteq OX$
Therefore:

$p \in OX$
Therefore:

$\Lambda \subseteq OX$
Therefore $\Lambda$ has a second endpoint $Z \in OX$, such that $Z$ is between $O, X$. 
Therefore $\Lambda = OZ$.
$\Box$


$\Lambda$ is an Upper Bound on $S^*$
$OZ$ is an upper bound on $S^*$.
For from set theory it is known that the union of all the sets any given set $D$ contains every set of $D$.


This article, or a section of it, needs explaining.In particular: Link to an appropriate result and express the above sentence in mathematical language.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore $OZ$ contains every element of $S^*$. 
But then no element of $S^*$ can ever be greater than $OZ$. 
Therefore $OZ$ is an upper bound on $S^*$. 
$\Box$


$\Lambda$ is the Supremum on $S^*$
$OZ$ is the supremum on $S^*$.
For if $OY$ is any upper bound on $S^*$, $\Lambda \subseteq OY$. 
For if $p \in \Lambda$, there is some $y \in S$ such that $p \in O \cdot \map w y \in S^*$. 
But it was remarked earlier that if $OY$ is an upper bound on $S^*$, then $OY$ contains every line segment of $S^*$. 
Therefore $p \in O \cdot \map w y \subseteq OY$.
Therefore $p \in OY$. 
Therefore $\Lambda \subseteq OY$. 
Therefore $\Lambda \le OY$. 
Therefore $OZ$ is an upper bound on $S^*$ and less than or equal to every upper bound on $S^*$.
Therefore $OZ$ is the supremum on $S^*$.
From Supremum is Unique, $OZ$ is unique.
$\Box$


Definition of $z$
There is a unique $z \in \R_{\ge 0}$ such that:

$\map f z = O \cdot \map w z = OZ$


$z$ is an Upper Bound on $S$
$z$ is an upper bound on all the elements of $S$.
For if not, then suppose there had been some $x \in S$ such that $x > z$. 
$L$ is a representation of the positive real number line. 
But if $x \in S$, then $O \cdot \map w x \in S^*$. 
Yet $O \cdot \map w x > OZ$, which is impossible because $OZ$ is the supremum on $S^*$. 
Therefore $z$ is an upper bound on all the elements of $S$.
$\Box$


$z$ is the Supremum on $S$
$z$ is the supremum on all the elements of $S$.
For if $g \in \R_{\ge 0}$ and $g < z$, then $O \cdot \map w g < OZ$.
Therefore $O \cdot \map w g$ is not an upper bound on $S^*$.
But on the contrary, there exists $\xi \in S$ such that $O \cdot \map w \xi \in S^*$ and $O \cdot \map w \xi > O \cdot \map w g$. 
But then $\xi > g$ and $\xi \in S$. 
Therefore no $g < z$ can be an upper bound on $S$. 
Therefore $z$ is the supremum on all the elements of $S$. 
$\Box$


Conclusion
Therefore the set $S \subseteq \R_{\ge 0}$ with upper bound $U$ has the unique supremum $z$.
$\blacksquare$


Proof 2
Let $S$ be bounded above.
Let $L$ be the set of real numbers defined as:

$\alpha \in L \iff \exists x \in S: \alpha < x$
Let $R := \relcomp \R L$, where $\complement_\R$ denotes complement in $\R$.
By construction of $L$, every element of $L$ is less than some element of $S$.
Hence no element of $L$ is an upper bound of $S$.
By construction of $R$, for every element $x$ of $R$, there exists no element of $S$ which is greater than $x$.
Hence every element of $R$ is an upper bound of $S$.
So, to prove the existence of $\sup S$, it is sufficient to demonstrate that $R$ contains a smallest number.

We verify that $L$ and $R$ fulfil the conditions for Dedekind's Theorem to hold.
We confirm that $\tuple {L, R}$ is a Dedekind cut of $\R$:

$(1): \quad \set {L, R}$ is a partition of $\R$
$(2): \quad L$ does not have a greatest element
$(3): \quad \forall x \in L: \forall y \in R: x < y$
By Union with Relative Complement:

$L \cup R = \R$
By Set with Relative Complement forms Partition, $\tuple {L, R}$ forms a partition of $\R$.
So $(1)$ holds immediately.

Let $\alpha \in L$.
Then there exists $x \in S$ such that $\alpha < x$.
Let $\alpha'$ be such that $\alpha < \alpha' < x$.
Then $\alpha' \in L$
So whatever $\alpha \in L$ is, it cannot be the greatest element of $L$.
Thus $(2)$ holds.

Let $\alpha \in L$.
Let $\beta \in R$.
Then there exists $x \in S$ such that $\alpha < x$.
By construction of $R$, $x \le \beta$.
Thus $\alpha < \beta$ for all $\alpha \in L, \beta \in R$.
Thus $(3)$ holds.

By the corollary to Dedekind's Theorem, either $L$ contains a greatest element or $R$ contains a smallest element.
We have shown that $L$ does not contain a greatest element.
Hence $R$ contains a smallest element.
Hence if $S$ is bounded above, it has a supremum.

Thus $\R$ is Dedekind complete by definition.

Now let $S$ be bounded below.
By Dedekind Completeness is Self-Dual, it follows that $S$ admits an infimum.
$\blacksquare$


Also known as
The least upper bound property of $\R$ is also known as:

the supremum principle
the completeness property
the continuum property (although this is also used to encompass the Greatest Lower Bound Property, a complementary result).


Also see
Greatest Lower Bound Property
Continuum Property


Sources
1970: Arne Broman: Introduction to Partial Differential Equations ... (previous) ... (next): Chapter $1$: Fourier Series: $1.1$ Basic Concepts: $1.1.2$ Definitions
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.1$: Real Numbers: Axiom $1.1.4$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $\S 2.4$: The Continuum Property
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): order properties (of real numbers): $(5)$: Completeness property
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): order properties (of real numbers): $(5)$: Completeness property




