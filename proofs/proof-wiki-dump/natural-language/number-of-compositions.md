# 

Source: https://proofwiki.org/wiki/Number_of_Compositions

Theorem
A $k$-composition of a positive integer $n$ is an ordered $k$-tuple: $c = \tuple {c_1, c_2, \ldots, c_k}$ such that $c_1 + c_2 + \cdots + c_k = n$ and $c_i $ are strictly positive integers.

The number of $k$-composition of $n$ is $\dbinom {n - 1} {k - 1}$ and the total number of compositions of $n$ is $2^{n - 1}$ (that is for $k = 1, 2, 3, \ldots, n$).


Proof
Consider the following array consisting of $n$ ones and $n - 1$ blanks:

$\begin{bmatrix} 1 \ \_ \ 1 \ \_ \ \cdots \ \_ \ 1 \ \_ \ 1 \end{bmatrix}$
In each blank we can either put a comma or a plus sign.
Each way of choosing $,$ or $+$ will give a composition of $n$ with the commas separating the individual $c_i$'s.
It follows easily that there are $2^{n-1}$ ways of doing this, since there are two choices for each of $n-1$ blanks.
The result follows from the Product Rule for Counting.

Similarly if we want specifically $k$ different $c_i$'s then we are left with choosing $k - 1$ out of $n - 1$ blanks to place the $k - 1$ commas.
The number of ways of doing so is $\dbinom {n - 1} {k - 1}$ from the Binomial Theorem.
$\blacksquare$





