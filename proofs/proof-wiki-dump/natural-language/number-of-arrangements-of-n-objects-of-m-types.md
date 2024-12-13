# 

Source: https://proofwiki.org/wiki/Number_of_Arrangements_of_n_Objects_of_m_Types



Theorem
Let $S$ be a collection of $n$ objects.
Let these $n$ objects be of $m$ different types, as follows:

Let there be:

$k_1$ objects of type $1$
$k_2$ objects of type $2$
$\cdots$
$k_m$ objects of type $m$
such that:

for each $j \in \set {1, 2, \ldots, m}$, all objects of type $j$ are indistinguishable from each other
$k_1 + k_2 + \cdots + k_m = n$

Then the total number $N$ of different arrangements of $S$ is given by the multinomial coefficient:

$N = \dbinom n {k_1, k_2, \ldots, k_m} = \dfrac {n!} {k_1! \, k_2! \cdots k_m!}$


Proof
Let $N$ be the number of different arrangements of $S$.
First suppose that all $n$ objects are distinct one from another.
Then from Number of Permutations of All Elements:

$N = n!$
Now suppose that $k_j$ elements of $S$ are indistinguishable from each other.
From Number of Permutations of All Elements, there are $k_j!$ different arrangements of those $k_j$ elements.
Hence the $n!$ arrangements of $S$ can each be grouped into $\dfrac {n!} {k_j!}$ partitions, each with $k_j$ elements, such that all the arrangements in each partition are indistinguishable from each other.
This applies for all $m$ types of objects.
The result follows.
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: This is intuitive and not at all rigorous. I throw it open for anyone either to improve this informal demonstration or write a further proof along rigorous lines.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Examples
$2$ Types
Let $S$ be a collection of $n$ objects, consisting of:

$p$ objects of one type
$q$ objects of another type.
The total number $N$ of different arrangements of $S$ is given by:

$N = \dfrac {n!}  {p! \, q!}$


$3$ Types
Let $S$ be a collection of $\paren {p + q + r}$ objects.
Let $S$ need to be partitioned into $3$ subsets of size $p$, $q$ and $r$ such that $p \ne q$, $q \ne r$ and $r \ne p$.
The total number $N$ of ways this can be done is:

$N = \dfrac {\paren {p + q + r}!}  {p! \, q! \, r!}$


Set of $3 p$ Objects of $3$ Equal Sized Subsets
Let $S$ be a collection of $3 p$ objects.
Let $S$ need to be partitioned into $3$ subsets of size $p$.
The total number $N$ of ways this can be done is:

$N = \dfrac {\paren {3 p}!}  {\paren {p!}^3 \times 3!}$


Letters in added
Let $N$ be the number of different arrangements of the letters in the word $\texttt{added}$.
Then:

$N = 20$


$6$ people in $3$ pairs
Let $N$ be the number of ways $6$ people can be partitioned into $3$ (unordered) pairs.
Then:

$N = 15$


$10$ people in $3$ groups of sizes $5$, $3$ and $2$
Let $N$ be the number of ways $10$ people can be partitioned into $3$ sets: one with $5$, one with $3$ and one with $2$ people.
Then:

$N = 2520$




