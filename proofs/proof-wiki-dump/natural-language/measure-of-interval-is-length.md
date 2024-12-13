# 

Source: https://proofwiki.org/wiki/Measure_of_Interval_is_Length



Theorem
Let $I$ be a real interval whose endpoints are $a$ and $b$.
Then $I$ is Lebesgue measurable, and the value of the measure is the length of the interval $b - a$.


Proof

A specific link is needed here.In particular: Insert here: Some stuff proving intervals are measurableYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code.
Let $L \subset \R$ be a real interval.
Then $L$ has two distinct endpoints: $a$ and $b$.
Let $\ds \set {I_n}_{n \mathop = 1}^\infty$ be a set of open real intervals satisfying:

$\ds L \subseteq \bigcup_{n \mathop = 1}^\infty I_n$


Case 1: $L$ is open and finite
The theorem follows from the definition of Lebesgue measure.
One can construct:

$I_n = \begin {cases} L & : n = 1 \\ \O & : n \ne 1 \end {cases}$
which yields the sum:

$\ds \sum \map l {I_n} = b - a$
This sum could not be any less because then:

$\ds a + \sum \map l {I_n} < b$
Hence:

$\map m L = b - a$
$\Box$


Case 2: $L$ is closed and finite
The open interval:

$\openint {a - \epsilon} {b + \epsilon}$
contains $\closedint a b$ for each positive $\epsilon$.
So:

$\map m L \le l \closedint {a - \epsilon} {b + \epsilon} = b - a + 2 \epsilon$
Since this is true for any positive $\epsilon$, we have:

$\map m L \le b - a$
Now it must be shown that:

$\map m L \ge b - a$
which will demonstrate:

$\map m L = b - a$
By the Heine-Borel Theorem, any set of open intervals covering $\closedint a b$ contains a finite subcover.
The sum of the lengths of the finite subcover is no greater than the sum of the lengths of the infinite cover.
Therefore it will suffice to show that $\ds \sum \map l {I_n} \ge b - a$ only for finite covers.

Since $a \in \bigcup I_n$, there must be a set in $\set {I_n}$ containing $a$.
Call this set $\openint {a_1} {b_1}$.
Necessarily:

$a_1 < a < b_1$
If $b_1 \le b$, then:

$b_1 \in \closedint a b$
So there must exist a set in $\set {I_n}$ containing $b_1$.
Let this set be $\openint {a_2} {b_2}$.
Continuing in this fashion, construct a (finite) sequence of intervals:

$\openint {a_1} {b_1}, \openint {a_2} {b_2}, \ldots, \openint {a_k} {b_k}$
Since $\set {I_n}$ is finite, this process must terminate at some interval $\openint {a_k} {b_k}$.
But this process can only terminate if $b \in \openint {a_k} {b_k}$.
Hence:

$\ds \sum \map l {I_n} \ge \sum_{i \mathop = 1}^k \paren {b_i - a_i} = b_k - a_1 - \sum_{j \mathop = 1}^{k - 1} \paren {a_{j + 1} - b_j} > b_k - a_1$
since $a_i > b_{i - 1}$.
But $b_k > b$ and $a_1 < a$, and so:

$b_k - a_1 > b - a$
Hence

$\ds \sum \map l {I_n} \ge b - a$
$\Box$


Case 3: $L$ is a finite interval
Regardless of whether the set in question is open, closed, or possibly neither, given $\epsilon > 0$, there is a closed interval $J \subset L$ such that:

$\map l J > \map l L - \epsilon$
Hence:

$\map l L - \epsilon < \map l J = \map m J \le \map m L \le \map m {\map c L} = \map l {\map c L} = \map l L$
where $\map c L$ is the closure of $L$.
Thus for each positive $\epsilon$:

$\map l L - \epsilon < \map m L \le \map l L$
and so:

$\map m L = \map l L = b - a$
$\Box$


Case 4: Infinite Intervals
If $L$ is infinite, either $a$ or $b$ is $\pm \infty$.
Given any real number $\Delta$, there is a closed interval $J \subset L$ with $\map l J = \Delta$.
Hence $\map m L \ge \Delta$ for arbitrarily large $\Delta$, and so:

$\map m L = \infty$
$\blacksquare$





