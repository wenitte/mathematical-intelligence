# 

Source: https://proofwiki.org/wiki/ISBN-10_is_Error-Correcting_Code/Transmission_Error

Theorem
ISBN-$10$ is an error-correcting code in the following sense:

If an error has been made in any one of the first $9$ digits, the check digit will be wrong.


Proof
Let $S$ denote an ISBN-$10$ whose $k$th digit is $d_k$.
Let $d_S$ denote the check digit of $S$.
Let $S'$ denote the ISBN-$10$ $S$ whose $n$th digit has been transmitted incorrectly, as $d'_n$.
Let $d'_S$ denote the check digit calculated on $S'$ according to the algorithm via which calculated $d_S$ on $S$.
It will be demonstrated that $d'_S \ne d_S$.

By definition of ISBN-$10$:

$d_S = \ds \sum_{k \mathop = 1}^9 k d_k \pmod {11}$
where $d_k$ is assigned the symbol $X$ if it calculates to $10$.
Then:

$d'_S = \ds \sum_{k \mathop = 1}^9 k d_k - n d_n + n d'_n \pmod {11}$
and so:

$d'_S - d_S = n \paren {d'_n - d_n} \pmod {11}$
It follows that:

$d'_S - d_S \ne 0$
and so the check digit on $d_S$ is the incorrect check digit for $S'$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $6$: Error-correcting codes




