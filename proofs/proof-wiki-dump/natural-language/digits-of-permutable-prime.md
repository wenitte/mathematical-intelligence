# 

Source: https://proofwiki.org/wiki/Digits_of_Permutable_Prime

Theorem
Let $p$ be a permutable prime with more than $1$ digit.
Then $p$ contains only digits from the set:

$\left\{ {1, 3, 7, 9}\right\}$


Proof
First note that from 3-Digit Permutable Primes, both $337$ and $199$ are permutable primes.
Hence it follows that all the elements of $\left\{ {1, 3, 7, 9}\right\}$ appear in at least one permutable prime.

Let $p$ contain an even digit $d$.
Then at least one anagram $p'$ of $p$ has $d$ at the end.
From Divisibility by 2, it follows that $p'$ is even.
As $p$ has more than $1$ digit it follows that $p'$ is composite.

Let $p$ contain the digit $5$.
Then at least one anagram $p'$ of $p$ has $5$ at the end.
From Divisibility by 5, it follows that $p'$ is divisible by $5$.
Except for $5$ itself, all integers which are divisible by $5$ are composite.
As $p$ has more than $1$ digit it follows that $p'$ is composite.

The result follows by definition of permutable prime.
$\blacksquare$





