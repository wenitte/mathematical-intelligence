# 

Source: https://proofwiki.org/wiki/Code_Number_for_Non-Positive_Integer_is_Primitive_Recursive

Theorem
Let $c : \N \to \N$ be defined as:

$\map c n = m$
where $m$ is the code number for the integer $-n : \Z$.
Then $c$ is a primitive recursive function.


Proof
Let $c : \N \to \N$ be defined as:

$\map c n = n + n$
which is primitive recursive by:

Addition is Primitive Recursive

For every $n \in \N$, we have:

$-n \le 0$
Thus:

$m = -2 \paren {-n} = 2 n$
Therefore:

$\map c n = m$
$\blacksquare$





