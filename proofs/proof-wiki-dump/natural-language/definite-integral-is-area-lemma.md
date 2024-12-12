# 

Source: https://proofwiki.org/wiki/Definite_Integral_is_Area/Lemma

Lemma for Definite Integral is Area
Let $f : \closedint a b \to \R_{\mathop \ge 0}$ be non-negative and Darboux integrable over $\closedint a b$.
Let $G$ be the point set of $\tuple {x, y}$ such that $a \le x \le b$ and $0 \le y \le \map f x$.
Let $A$ be the area of $G$, which is colloquially called the area under the curve.
Then $A$ equals the Darboux integral of $f$ over $\closedint a b$.


Proof
Let $\ds P = \sequence {x_i}_{0 \mathop \le i \mathop \le n}$ be a finite subdivision of $\closedint a b$.
For each $i$ from $1$ to $n$, the $R_i$ be the rectangle $x_{i - 1} \le x \le x_i$ and $\ds 0 \le y \le \sup_{\closedint {x_{i - 1} } {x_i} } \map f x$.
Then all the points $0 \le y \le \map f x$ for $x \in \closedint {x_{i - 1} } {x_i}$ are in $R_i$.
But $P$ is a subdivision of $\closedint a b$, so $\ds \bigcup R_i \supseteq G$.
Therefore, $\set {R_i}_{1 \mathop \le i \mathop \le n}$ is a finite covering of $G$.

By Area of Rectangle, $\map A {R_i} = \paren {x_i - x_{i - 1} } \sup_{\closedint {x_{i - 1} } {x_i} } \map f x$.
Thus:














\(\ds \map A {\bigcup R_i}\)

\(=\)







\(\ds \sum \map A {R_i}\)





The rectangles have disjoint interiors














\(\ds \)

\(=\)







\(\ds \sum \paren {x_i - x_{i - 1} } \sup_{\closedint {x_{i - 1} } {x_i} } \map f x\)




















\(\ds \)

\(=\)







\(\ds \map U P\)





Definition of Upper Darboux Sum



Therefore, by the definitions of Outer Jordan Content and Upper Darboux Integral:

$\ds \map {m^*} G \le \overline {\int_a^b} \map f x \rd x$

Now, let $\ds y' = \sup_{\closedint a b} \map f x$.
Let $B$ be the rectangle with $a \le x \le b$ and $0 \le y \le y'$.
Then, $G \subseteq B$.
Consider again $\ds P = \sequence {x_i}_{0 \mathop \le i \mathop \le n}$, a finite subdivision of $\closedint a b$.
Let $S_i$ be the rectangle $x_{i - 1} \le x \le x_i$ and $\inf_{\closedint {x_{i - 1} } {x_i} } \map f x \le y \le y'$.
In a similar manner to before, $\set {S_i}_{1 \mathop \le i \mathop \le n}$ is a finite covering of $B \setminus G$.
And like before, it follows that:

$\ds \map {m^*} {B \setminus G} \le \map A B - \underline {\int_a^b} \map f x \rd x$
But then:

$\ds \underline {\int_a^b} \map f x \rd x \le \map A B - \map {m^*} {B \setminus G}$

Also, by Outer Jordan Content Never Smaller than Inner Jordan Content:

$\map A B - \map {m^*} {B \setminus G} \le \map {m^*} G$
So the following inequalities hold:

$\ds \underline {\int_a^b} \map f x \rd x \le \map A B - \map {m^*} {B \setminus G} \le \map {m^*} G \le \overline {\int_a^b} \map f x \rd x$

By hypothesis:

$\ds \underline {\int_a^b} \map f x \rd x = \overline {\int_a^b} \map f x \rd x$
Therefore:

$\ds \map {m^*} G = \map A B - \map {m^*} {B \setminus G} = \map m G = \int_a^b \map f x \rd x$
By Well-Defined Jordan Content Equals Content:

$\ds A = \map m G = \int_a^b \map f x \rd x$
$\blacksquare$





