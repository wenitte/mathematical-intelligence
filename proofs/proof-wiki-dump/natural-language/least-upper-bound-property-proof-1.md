# 

Source: https://proofwiki.org/wiki/Least_Upper_Bound_Property/Proof_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: There are a few of places where general set-theoretical and order-theoretical results can be linked to directly rather than constructing proofs for them in this particular context from whole cloth.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $S \subset \R$ be a non-empty subset of the set of real numbers such that $S$ is bounded above.
Then $S$ admits a supremum in $\R$.
This is known as the least upper bound property of the real numbers.


Proof
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





