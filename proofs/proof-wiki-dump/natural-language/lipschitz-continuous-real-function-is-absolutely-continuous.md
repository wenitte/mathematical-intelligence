# 

Source: https://proofwiki.org/wiki/Lipschitz_Continuous_Real_Function_is_Absolutely_Continuous

Theorem
Let $I \subseteq \R$ be a real interval.
Let $f$ be Lipschitz continuous.

Then $f$ is absolutely continuous.


Proof
By the definition of Lipschitz continuity, there exists $K \in \R$ such that: 

$\size {\map f x - \map f y} \le K \size {x - y}$
for all $x, y \in I$.
If $K = 0$, then: 

$\size {\map f x - \map f y} = 0$
for all $x, y \in I$. 
In this case, $f$ is constant.
Hence, by Constant Real Function is Absolutely Continuous:

$f$ is absolutely continuous in the case $K = 0$.
Now, take $K > 0$.
Let $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq I$ be a collection of disjoint closed real intervals.
We have: 














\(\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} }\)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n K \size {b_i - a_i}\)




















\(\ds \)

\(=\)







\(\ds K \sum_{i \mathop = 1}^n \paren {b_i - a_i}\)





since $b_i > a_i$



Let $\epsilon$ be a positive real number. 
Then for all collections of disjoint closed real intervals $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq I$ with:

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \frac \epsilon K$
we have: 

$\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} } < \epsilon$
Since $\epsilon$ was arbitrary:

$f$ is absolutely continuous in the case $K > 0$.
Hence the result.
$\blacksquare$


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): absolutely continuous function




