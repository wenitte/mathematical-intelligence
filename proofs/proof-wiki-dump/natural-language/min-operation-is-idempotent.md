# 

Source: https://proofwiki.org/wiki/Min_Operation_is_Idempotent

Theorem
The min operation operation is idempotent:

$\map \min {x, x} = x$


Proof
Follows immediately from the definition of min operation:

$\map \min {a, b} = \begin {cases} a & : a \le b \\ b & : b \le a \end {cases}$
Setting $x = a = b$ returns the result.
$\blacksquare$


Also see
Max Operation is Idempotent




