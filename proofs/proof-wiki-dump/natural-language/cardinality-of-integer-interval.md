# 

Source: https://proofwiki.org/wiki/Cardinality_of_Integer_Interval


It has been suggested that this page or section be merged into I think there's something like this already, in the category concerned with the axiomatic construction of natural numbers, which came from Modern Algebra by Seth Warner. If appropriate, can be merged..To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $a, b \in \Z$ be integers.
Let $\left[{a \,.\,.\, b}\right]$ denote the integer interval between $a$ and $b$.

Then $\left[{a \,.\,.\, b}\right]$ is finite and its cardinality equals:

$\begin{cases}
b - a + 1 & : b \ge a - 1 \\ 
0 & : b \le a - 1 
\end{cases}$


Proof
Let $b < a$.
Then $\left[{a \,.\,.\, b}\right]$ is empty.
By Empty Set is Finite, $\left[{a \,.\,.\, b}\right]$ is finite.
By Cardinality of Empty Set, $\left[{a \,.\,.\, b}\right]$ has cardinality $0$.
Let $b \ge a$.
By Translation of Integer Interval is Bijection, there exists a bijection between $\left[{a \,.\,.\, b}\right]$ and $\left[{0 \,.\,.\, b - a}\right]$.
Thus $\left[{a \,.\,.\, b}\right]$ is finite of cardinality $b - a + 1$.
$\blacksquare$





