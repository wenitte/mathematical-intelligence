# 

Source: https://proofwiki.org/wiki/Equivalence_Class/Examples/Months_that_Start_on_the_Same_Day_of_the_Week

Examples of Equivalence Class
Let $M$ be the set of months of the (calendar) year according to the (usual) Gregorian calendar.
Let $\sim$ be the relation on $M$ defined as:

$\forall x, y \in M: x \sim y \iff \text {$x$ and $y$ both start on the same day of the week}$

The set of equivalence classes under $\sim$ depends on whether the year is a leap year.
For a non-leap year, the set of equivalence classes is:

$\set {\set {\text {January}, \text {October} }, \set {\text {February}, \text {March}, \text {November} }, \set {\text {April}, \text {July} }, \set {\text {May} }, \set {\text {June} }, \set {\text {August} }, \set {\text {September}, \text {December} } }$

For a leap year, the set of equivalence classes is:

$\set {\set {\text {January}, \text {April}, \text {July} }, \set {\text {February}, \text {August} }, \set {\text {March}, \text {November} }, \set {\text {May} }, \set {\text {June} }, \set {\text {September}, \text {December} }, \set {\text {October} } }$


Proof
We have that:

The months with $30$ days are:
$\text {April}, \text {June}, \text {September}, \text {November}$
The months with $31$ days are:
$\text {January}, \text {March}, \text {May}, \text {July}, \text {August}, \text {October}, \text {December}$
In a non-leap year, $\text {February}$ has $28$ days
In a leap year, $\text {February}$ has $29$ days.

Let month $m$ have $m_d$ days in it.
Let month $m$ start on day $d$, where $d$ is in the range $0$ to $6$ (which day of the week corresponds to which number is irrelevant at this stage).
Then month $m + 1$ starts on day $\paren {d + m_d} \pmod 7$.

For reference:














\(\ds 28\)

\(\equiv\)







\(\ds 0 \pmod 7\)




















\(\ds 29\)

\(\equiv\)







\(\ds 1 \pmod 7\)




















\(\ds 30\)

\(\equiv\)







\(\ds 2 \pmod 7\)




















\(\ds 31\)

\(\equiv\)







\(\ds 3 \pmod 7\)










Without loss of generality, let $\text {January}$ start on day $0$.
Then the sequence of the days which are the $1$st of the month is as follows:

For a non-leap year:

$\tuple {0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5}$
This sequence is A189915 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

For a leap year:

$\tuple {0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6}$
This sequence is A189916 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

The result follows.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $7$




