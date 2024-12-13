# 

Source: https://proofwiki.org/wiki/Max_Operation_is_Idempotent

Theorem
The max operation operation is idempotent:

$\map \max {x, x} = x$


Proof
Follows immediately from the definition of max operation:

$\map \max {a, b} = \begin {cases} b & : a \le b \\ a & : b \le a \end {cases}$
Setting $x = a = b$ returns the result.
$\blacksquare$


Also see
Min Operation is Idempotent




