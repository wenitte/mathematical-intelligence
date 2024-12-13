# 

Source: https://proofwiki.org/wiki/Product_Rule_for_Counting



Theorem
Let it be possible to choose an element $\alpha$ from a given set $S$ in $m$ different ways.
Let it be possible to choose an element $\beta$ from a given set $T$ in $n$ different ways.

Then the ordered pair $\tuple {\alpha, \beta}$ can be chosen from the cartesian product $S \times T$ in $m n$ different ways.


General Theorem
Suppose a process can be broken into $m$ successive, ordered, stages, with the $i$th stage having $r_i$ possible outcomes (for $i = 1, \ldots, m$).
Let the number of outcomes at each stage be independent of the choices in previous stages
Let the composite outcomes be all distinct.

Then the total procedure has $\ds \prod_{i \mathop = 1}^m r_i$ different composite outcomes.


Proof

This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
The validity of this rule follows directly from the definition of multiplication of integers.
The product $a b$ (for $a, b \in \N_{>0}$) is the number of sequences $\sequence {A, B}$, where $A$ can be any one of $a$ items and $B$ can be any one of $b$ items.
$\blacksquare$


Also known as
Some sources give this as the General Combinatorial Principle.
Some sources call it the $r$, $s$ principle: if one operation can be performed in $r$ different ways, and if another operation can be performed in $s$ different ways, the two operations can be performed in succession in $r \times s$ different ways.


Examples
Choices from $2$ and $3$
The canonical example concerns choices from the menu at a restaurant:

You may select exactly one dish from each category:

Starters
$(1): \quad$ Crottled Greeps
$(2): \quad$ Stone Soup
$(3): \quad$ Petty-Dwarf Roots
Main Course
$(1): \quad$ Hufu Salad
$(2): \quad$ Braised Trake in Funistrada

The diner then has $2 \times 3 = 6$ possible different meals:

$(1): \quad$ Crottled Greeps with Hufu Salad
$(2): \quad$ Crottled Greeps with Braised Trake in Funistrada
$(3): \quad$ Stone Soup with Hufu Salad
$(4): \quad$ Stone Soup with Braised Trake in Funistrada
$(5): \quad$ Petty-Dwarf Roots with Hufu Salad
$(6): \quad$ Petty-Dwarf Roots with Braised Trake in Funistrada


Choices from $4$, $3$ and $2$
Let $N$ be the number of ways you can choose at least $1$ item of fruit from:

$4$ (indistinguishable) oranges
$3$ (indistinguishable) bananas
$2$ (indistinguishable) apples
Then:

$N = 59$


Choices from $5$ and $3$
There are:

$5$ different ways to travel from $A$ to $B$
$3$ different ways to travel from $B$ to $C$.
Hence there are $5 \times 3 = 15$ different ways to travel from $A$ to $C$.


$6$ Football Matches
Let it be understood that a football match between two teams $\text A$ and $\text B$ can end as:

A win for team $\text A$
A draw
A loss for team $\text A$.
That being understood, then there are $729$ ways to predict the results of $6$ football matches.


Also see
Fundamental Principle of Counting


Sources
1932: Clement V. Durell: Advanced Algebra: Volume $\text { I }$ ... (previous) ... (next): Chapter $\text I$ Permutations and Combinations: The $r$, $s$ Principle: Example $1$.
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations




