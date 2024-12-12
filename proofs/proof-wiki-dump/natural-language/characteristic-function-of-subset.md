# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Subset

Theorem
Let $A \subseteq B \subseteq S$.

Then:

$\forall s \in S: \chi_A \left({s}\right) \le \chi_B \left({s}\right)$
where $\chi$ denotes characteristic function.


Proof
Both $\chi_A$ and $\chi_B$ take values in $\left\{{0, 1}\right\}$ as they are characteristic functions.
So if $\chi_A \left({s}\right) = 0$, then the statement of the theorem is automatically satisfied (since both $0 \le 0$ and $0 \le 1$).

Now assume $\chi_A \left({s}\right) = 1$.
By definition of $\chi_A$, this happens if and only if $s \in A$.
But as $A \subseteq B$, this implies $s \in B$ as well.
Hence, $\chi_B \left({s}\right) = 1$, and so $\chi_A \left({s}\right) \le \chi_B \left({s}\right)$.

The theorem follows from Proof by Cases.
$\blacksquare$





