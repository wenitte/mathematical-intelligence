# 

Source: https://proofwiki.org/wiki/Behaviour_of_Function_Near_Limit



Theorem
Let $f$ be a real function.
Let $f \left({x}\right) \to l$ as $x \to \xi$.
Then:

If $l > 0$, then $\exists h > 0: \forall x: \xi - h < x < \xi + h, x \ne \xi: \map f x > 0$
If $l < 0$, then $\exists h > 0: \forall x: \xi - h < x < \xi + h, x \ne \xi: \map f x < 0$


Proof
From the definition of limit of a function:

$\forall \epsilon > 0: \exists \delta > 0: 0 < \size {x - \xi} < \delta \implies \size {\map f x - l} < \epsilon$

Let $l > 0$.
Since this is true for all $\epsilon > 0$, it is also true for $\epsilon = l$.
So let the value of $\delta$, for the above to be true, labelled $h$.
Then:

$0 < \size {x - \xi} < h \implies \size {\map f x - l} < l$
That is:

$\xi - h < x < \xi + h, x \ne \xi \implies 0 = l - l < \map f x < l + l = 2 l$
Hence:

$\forall x: \xi - h < x < \xi + h, x \ne \xi: 0 < \map f x$

Now let $l < 0$, and consider $\epsilon = -l$.
A similar thread of reasoning leads us to:

$\xi - h < x < \xi + h, x \ne \xi \implies -2 l < \map f x < 0$
and hence the second result.
$\blacksquare$


Note
If $l = 0$, neither conclusion may be drawn without further information - $\map f x$ may stay either side of zero.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.15 \ (6)$




