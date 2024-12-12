# 

Source: https://proofwiki.org/wiki/Continuity_of_Linear_Functionals



Theorem
Let $V$ be a normed vector space, and let $L$ be a linear functional on $V$.

Then the following four statements are equivalent:

$(1): \quad L$ is continuous
$(2): \quad L$ is continuous at $\mathbf 0_V$
$(3): \quad L$ is continuous at some point
$(4): \quad L$ is bounded: $\exists c > 0: \forall v \in H: \size {L v} \le c \norm v$


Proof
$(1)$ iff $(2)$
$(1)$ implies $(2)$
Clearly if $L$ is continuous, then in particular it is continuous at $\mathbf 0_V$. 
$\Box$


$(2)$ implies $(1)$
If $L$ is continuous at $\mathbf 0_V$, then for all positive real numbers $\epsilon$ there exists some $\delta > 0$ such that: 

for all $x \in V$ with $\norm {x - \mathbf 0_V} < \delta$ we have $\size {L x - \map L {\mathbf 0_V} } < \varepsilon$.
That is, from Linear Functional fixes Zero Vector: 

for all $x \in V$ with $\norm x < \delta$ we have $\size {L x} < \epsilon$.
Fix $x \in V$ and let $y \in V$. 
We have from the definition of a linear functional: 

$\size {L x - L y} = \size {\map L {x - y} }$
For any $y \in V$ with: 

$\norm {x - y} < \delta$
we have: 

$\size {\map L {x - y} } < \epsilon$
that is: 

$\size {L x - L y} < \epsilon$
So:

$L$ is continuous at $x \in V$.
Since $x \in V$ was arbitrary, we have: 

$L$ is continuous.
$\Box$


$(2)$ iff $(3)$
$(2)$ implies $(3)$
Clearly if $L$ is continuous at $\mathbf 0_V$, it is continuous at some point.
$\Box$


$(3)$ implies $(2)$
Suppose that $L$ is continuous at $x_0 \in V$. 
Let $\epsilon$ be a positive real number. 
Then, there exists $\delta > 0$ such that: 

for all $x \in V$ such that $\norm {\paren {x + x_0} - x_0} < \delta$, we have $\size {\map L {x + x_0} - L x_0} < \epsilon$.
That is: 

for all $x \in V$ with $\norm x < \delta$, we have $\size {\map L {x + x_0} - L x_0} < \epsilon$
By the definition of a linear functional, we therefore have: 

for all $x \in V$ with $\norm x < \delta$ we have $\size {L x} < \epsilon$.
That is: 

$L$ is continuous at $\mathbf 0_V$.
$\Box$


$(1)$ iff $(4)$
$(1)$ implies $(4)$
Since $L$ is continuous, it is in particular continuous at $\mathbf 0_V$.
So, there exists $\delta > 0$ such that:

for all $x \in V$ with $\norm x < \delta$, we have $\size {L x} < 1$
Note that for any $x \in V$ with $x \ne \mathbf 0_V$, we have: 

$\ds \norm {\frac x {\norm x} } = \frac {\norm x} {\norm x} = 1$
so that: 

$\ds \norm {\frac \delta 2 \times \frac x {\norm x} } = \frac \delta 2 < \delta$
So, we have: 

$\ds \size {\map L {\frac \delta 2 \times \frac x {\norm x} } } < 1$
We can write: 

$\ds x = \frac {\delta x} {2 \norm x} \times \frac {2 \norm x} \delta$
to obtain: 














\(\ds \size {L x}\)

\(=\)







\(\ds \size {\map L {\frac {\delta x} {2 \norm x} \times \frac {2 \norm x} \delta} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \norm x} \delta \size {\map L {\frac {\delta x} {2 \norm x} } }\)





Definition of Linear Functional














\(\ds \)

\(<\)







\(\ds \frac {2 \norm x} \delta\)









So, for all $v \in V \setminus \set {\mathbf 0_V}$, we have: 

$\size {L v} < c \norm v$
with: 

$c = \dfrac {2 \norm v} \delta$
For $v = \mathbf 0_V$, we have: 

$\size {L v} = c \norm v$
So, we have: 

$\size {L v} \le c \norm v$
for all $v \in V$. 
$\Box$


$(4)$ implies $(1)$
Let $\epsilon$ be a positive real number.
Suppose that there exists $c > 0$ such that: 

$\size {L v} \le c \norm v$
for $v \in V$.
Fix $x \in V$.
Then, for any $y \in V$, we have: 

$\size {\map L {x - y} } \le c \norm {x - y}$
that is: 

$\size {L x - L y} \le c \norm {x - y}$
So, whenever $y$ is such that: 

$\norm {x - y} < \epsilon/c$
we have: 

$\size {L x - Ly} < \epsilon$
That is:

$L$ is continuous at $x \in V$.
Since $x \in V$ was arbitrary, we have: 

$L$ is continuous.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 3.$ The Riesz Representation Theorem: Proposition $3.1$




