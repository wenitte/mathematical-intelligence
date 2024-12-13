# 

Source: https://proofwiki.org/wiki/Inverse_of_Strictly_Monotone_Function

Theorem
Let $f$ be a real function which is defined on $I \subseteq \R$.
Let $f$ be strictly monotone on $I$.
Let the image of $f$ be $J$. 

Then $f$ always has an inverse function $f^{-1}$ and:

if $f$ is strictly increasing then so is $f^{-1}$
if $f$ is strictly decreasing then so is $f^{-1}$.


Proof
The function $f$ is a bijection from Strictly Monotone Real Function is Bijective.
Hence from Bijection iff Inverse is Bijection, $f^{-1}$ always exists and is also a bijection.

From the definition of strictly increasing:

$x < y \iff \map f x < \map f y$
Hence:

$\map {f^{-1} } x < \map {f^{-1} } y \iff \map {f^{-1} } {\map f x} < \map {f^{-1} } {\map f y}$
and so:

$\map {f^{-1} } x < \map {f^{-1} } y \iff x < y$

Similarly, from the definition of strictly decreasing:

$x < y \iff \map f x > \map f y$
Hence:

$\map {f^{-1} } x < \map {f^{-1} } y \iff \map {f^{-1} } {\map f x} > \map {f^{-1} } {\map f y}$
and so:

$\map {f^{-1} } x < \map {f^{-1} } y \iff x > y$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 12.9$




