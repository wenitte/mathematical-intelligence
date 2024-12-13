# 

Source: https://proofwiki.org/wiki/Reverse_Triangle_Inequality/Real_and_Complex_Fields



Theorem
Let $x$ and $y$ be elements of either the real numbers $\R$ or the complex numbers $\C$.
Then:

$\cmod {x - y} \ge \size {\cmod x - \cmod y}$
where $\cmod x$ denotes either the absolute value of a real number or the complex modulus of a complex number.


Corollary 1
Let $x$ and $y$ be elements of either the real numbers $\R$ or the complex numbers $\C$.
Then:

$\size {x - y} \ge \size x - \size y$
where $\size x$ denotes either the absolute value of a real number or the complex modulus of a complex number.


Corollary 2
Let $x$ and $y$ be elements of either the real numbers $\R$ or the complex numbers $\C$.
Then:

$\size {x + y} \ge \size x - \size y$
where $\size x$ denotes either the absolute value of a real number or the complex modulus of a complex number.


Corollary 3
Let $x$ and $y$ be elements of either the real numbers $\R$ or the complex numbers $\C$.
Then:

$\size {x + y} \ge \size {\size x - \size y}$
where $\size x$ denotes either the absolute value of a real number or the complex modulus of a complex number.


Proof 1
Let $X$ denote either $\R$ or $\C$ as appropriate.
From Real Number Line is Metric Space and Complex Plane is Metric Space the distance function $d: X \times X \to \R$ can be defined as:

$\map d {x, y} = \size {x - y}$

From the Reverse Triangle Inequality as applied to metric spaces:

$(1): \quad \forall x, y, z \in X: \size {\map d {x, z} - \map d {y, z} } \le \map d {x, y}$

Let $z = 0$.
Then $(1)$ translates to:

$\forall x, y, z \in X: \size {\size {x - 0} - \size {y - 0} } \le \size {x - y}$
Hence the result.
$\blacksquare$


Proof 2
From proof $2$ of corollary $1$ to this result, which is derived independently:

$\size {x - y} \ge \size x - \size y$

There are two cases:
$(1): \quad \size x \ge \size y$
We have :

$\size {\size x - \size y} = \size x - \size y$
and the proof is finished.
$\Box$

$(2): \quad \size y \ge \size x$
We have:

$\size {y - x} \ge \size y - \size x = \size {\size y - \size x}$
But:

$\size {y - x} = \size {x - y}$
and:

$\size {\size y - \size x} = \size {\size x - \size y}$

From this we have:

$-\size {\size x - \size y} \ge -\size {x - y}$
Since, by Negative of Absolute Value, we have that:

$\size x - \size y \ge -\size {\size x - \size y}$
it follows that:

$-\size {x - y} \le \size x - \size y \le \size {x - y}$
The result follows.
$\blacksquare$


Examples
Example: $\size {6 - \paren {-1} }$
$7 = \size {6 - \paren {-1} } \ge \size 6 - \size {-1} = 6 - 1 = 5$


Sources
1957: E.G. Phillips: Functions of a Complex Variable (8th ed.) ... (previous) ... (next): Chapter $\text I$: Functions of a Complex Variable: $\S 2$. Conjugate Complex Numbers
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: $(2.4)$
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.7$ Complex Numbers and Functions: Inequalities: $3.7.29$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.1$: Real Numbers: Corollary $1.1.10$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 8$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): absolute value: $\text {(iii)}$




