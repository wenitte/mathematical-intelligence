# 

Source: https://proofwiki.org/wiki/Divisibility_of_Common_Difference_of_Arithmetic_Sequence_of_Primes



Theorem
If $n$ terms of an arithmetic sequence are primes, then the common difference must be divisible by all primes less than $n$.


Proof
Without loss of generality suppose the arithmetic sequence is increasing.
We also disregard the trivial case of zero common difference (do note that the theorem also holds in this case).

The proof proceeds by induction:

Basis for the Induction
As the smallest prime is $2$, the first nontrivial case is $n = 3$.

Aiming for a contradiction, suppose there exists an arithmetic sequence of $3$ primes where the common difference $d$ is not divisible by $2$.
By Prime not Divisor implies Coprime, $d$ and $2$ are coprime.
By Exist Term in Arithmetic Sequence Divisible by Number, one of these primes must be divisible by $2$.
By definition of a prime number, that prime must be $2$.
As the smallest prime is $2$, it must be the first term of the sequence.
But then the third term of the sequence, $2 + 2 d$, would be divisible by $2$, and hence cannot be prime.
This contradiction shows that any arithmetic sequence of $3$ primes must have common difference divisible by $2$.


Induction Hypothesis
This is the induction hypothesis:

For some $k \ge 3$, if $k$ terms of an arithmetic sequence are odd primes, then the common difference must be divisible by all primes less than $k$.
Now we need to show:

If $k + 1$ terms of an arithmetic sequence are odd primes, then the common difference must be divisible by all primes less than $k + 1$.


Induction Step
This is the induction step:
We apply the induction hypothesis to the first $k$ terms of the $\paren {k + 1}$-term arithmetic sequence of primes.
If $k$ is not prime, then the set of primes less than $k$ is the same as the set of primes less than $k + 1$, and the conclusion follows trivially.

Now suppose $k$ is prime.
From the induction hypothesis we know that the common difference $d$ is divisible by all primes less than $k$.
We just need to show that $d$ is divisible by $k$ as well.
Aiming for a contradiction, suppose this is not the case.
By Prime not Divisor implies Coprime, $d$ and $k$ are coprime.
By Exist Term in Arithmetic Sequence Divisible by Number, one of these primes must be divisible by $k$.
By definition of a prime number, that prime must be $k$.
If $k$ is the first term of the sequence, then the $\paren {k + 1}^{th}$ term of the sequence, $k + k d$, would be divisible by $k$, and hence cannot be prime.
Therefore $k$ is not the first term of the sequence.
Consider $k - d$, the term before $k$.
As $k - d$ is a prime less than $k$, it must be a divisor of $d$.
But then $k = k - d + d$ would be a multiple of $k - d$ greater than $k - d$, so it cannot be prime.
This contradiction shows that any arithmetic sequence of $k + 1$ primes must have common difference divisible by $k$.

The result follows by induction.
$\blacksquare$


Note
Wacław Sierpiński attributes this result to an M. Cantor.

Sources
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: No. $72$




