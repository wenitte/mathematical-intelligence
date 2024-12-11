# 

Source: https://proofwiki.org/wiki/100_in_Golden_Mean_Number_System_is_Equivalent_to_011

Theorem
Consider the golden mean number system.

Let $p$ and $q$ be arbitrary strings in $\set {0, 1}$.

Let $x \in \R_{\ge 0}$ have a representation which includes the string $100$, say:

$x = p100q$
Then $x \in \R_{\ge 0}$ also has the representation:

$x = p011q$

Similarly, let $x \in \R_{\ge 0}$ have a representation which includes the string $011$, say:

$x = p011q$
Then $x \in \R_{\ge 0}$ also has the representation:

$x = p100q$

That is, any instance of $100$ appearing in a representation of a non-negative real number $x$ is equivalent to $011$, and vice versa.

Note that the instance of $100$ or $011$ may also include a radix point; the instance of $011$ or $100$ to which it is equivalent will include the radix point in the same location.


Proof
Let $100$ appear anywhere within $x$.
Then:

$x = \phi^r + \ds \sum_{c \mathop \in C} \phi^c$
where:

$C \subset \Z$
$r \in \Z$
$r \notin C, r - 1 \notin C, r - 2 \notin C$
That is, the instance of $100$ corresponds to the indices $r, r - 1, r - 2$.
From Power of Golden Mean as Sum of Smaller Powers:

$\phi^r = \phi^{r - 1} + \phi^{r - 2}$
and so:

$x = \phi^{r - 1} + \phi^{r - 2} + \ds \sum_{c \mathop \in C} \phi^c$
That is, the indices instance of $100$ corresponds to the indices $r, r - 1, r - 2$ now correspond to the string $011$.
$\blacksquare$


Sources
1957: George Bergman: Number System with an Irrational Base (Math. Mag. Vol. 31, no. 2: pp. 98 – 110)  www.jstor.org/stable/3029218




