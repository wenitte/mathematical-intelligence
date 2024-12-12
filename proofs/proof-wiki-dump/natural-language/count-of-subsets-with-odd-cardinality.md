# 

Source: https://proofwiki.org/wiki/Count_of_Subsets_with_Odd_Cardinality



Theorem
Let $S$ be a set whose cardinality is $n$.

Then the number of subsets of $S$ whose cardinality is odd is $2^{n-1}$.


Proof 1
Let $F$ be the total number of subsets of $S$ whose cardinality is odd.
From Cardinality of Set of Subsets, the number of subsets of $S$ with $m$ elements is $\dbinom n m$:

$\dbinom n m = \dfrac {n!} {m! \paren {n - m} }$
where $\dbinom n m$ is a binomial coefficient.

Thus the total number of subsets of $S$ whose cardinality is Odd is given by:

$\ds E = \dbinom n 1 + \dbinom n 3 + \dbinom n 5 + \cdots = \sum_{j \mathop \in \Z} \dbinom n {2 j + 1}$
Note the loose limits of the summation sign: the expression truly ranges over all $\Z$.
This is because, when $2 j + 1 < 0$ and $2 j + 1 > n$, $\dbinom n {2 j + 1} = 0$ by definition of binomial coefficient.
The result then follows from Sum of Odd Index Binomial Coefficients:

$\ds \sum_{j \mathop \ge 0} \binom n {2 j + 1} = 2^{n - 1}$
$\blacksquare$


Proof 2
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

The number of subsets of $S$ whose cardinality is odd is $2^{n - 1}$, where $\card S = n$.


Basis for the Induction
When $n = 1$ we have from Cardinality of Power Set of Finite Set that $S$ has $2^1 = 2$ subsets: $\O$ and $S$ itself.
We have that $\card S = 1$ and $\card \O = 0$.
So there is indeed $2^{1 - 1} = 2^0 = 1$ subset of $S$ whose cardinality is odd, and that is $S$.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

The number of subsets of $S$ whose cardinality is odd is $2^{k - 1}$, where $\card S = k$.
Then we need to show:

The number of subsets of $S$ whose cardinality is odd is $2^k$, where $\card S = k + 1$.


Induction Step
This is our induction step:
Let $\card S = k + 1$.
Let $x \in S$.
Consider the set $S' = S \setminus \set x$.
We see that $\card {S'} = k$.

Let $A \subseteq S$.
If $x \notin A$ then $A \subseteq S'$.
If $x \in A$ then there exists a unique $A' \subseteq S'$ such that $A' \cup \set x = A$.
In fact, $A' = A \setminus \set x$.

Let $K$ be the number of subsets of $S'$ with an odd number of elements.
From the induction hypothesis we have that $K = 2^{k - 1}$.

Now adjoin $x$ to all the subsets of $S'$.
Suppose $E' \subseteq S'$, where $E'$ has an even number of elements.
Then $E' \cup \set x$ has an odd number of elements.
Similarly, $O' \subseteq S'$, where $O'$ has an odd number of elements.
Then $O' \cup \set x$ has an even number of elements.

So the number of subsets of $S$ with an odd number of elements is:

$K$ subsets of $S$ that have an odd number of elements and are subsets of $S'$
and:

$K$ subsets of $S$ of the form $O' \cup \set x$.

We have that subset $A$ of $S$ has a unique expression of the form $A'$ or $A' \cup \set x$ with $A' \subseteq S'$.
Thus there are exactly $2 K$ subsets of $S$ with an odd number of elements.
But as $K = 2^{k - 1}$ it follows that $2 K = 2^k$.

That is, there are $2^k$ subsets of $S$ with an odd number of elements.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

The number of subsets of $S$ whose cardinality is odd is $2^{n - 1}$, where $\card S = n$.
$\blacksquare$





