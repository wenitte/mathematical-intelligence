# 

Source: https://proofwiki.org/wiki/Properties_of_Limit_at_Minus_Infinity_of_Real_Function/Multiple_Rule

Theorem
Let $a, \alpha \in \R$. 
Let $f : \hointl {-\infty} a \to \R$ be a real function such that: 

$\ds \lim_{x \mathop \to -\infty} \map f x$ exists
where $\ds \lim_{x \mathop \to -\infty}$ denotes the limit at $-\infty$.

Then: 

$\ds \lim_{x \mathop \to -\infty} \paren {\alpha \map f x}$ exists
with:

$\ds \lim_{x \mathop \to -\infty} \paren {\alpha \map f x} = \alpha \lim_{x \mathop \to -\infty} \map f x$


Proof
From Properties of Limit at Minus Infinity of Real Function: Relation with Limit at Infinity, we have: 

$\ds \lim_{x \mathop \to \infty} \map f {-x}$ exists.
From Properties of Limit at Infinity of Real Function: Multiple Rule, we then have: 

$\ds \lim_{x \mathop \to \infty} \paren {\alpha \map f {-x} }$ exists
with:

$\ds \lim_{x \mathop \to \infty} \paren {\alpha \map f {-x} } = \alpha \lim_{x \mathop \to \infty} \map f {-x}$
From Properties of Limit at Minus Infinity of Real Function: Relation with Limit at Infinity, this gives: 

$\ds \lim_{x \mathop \to -\infty} \paren {\alpha \map f x} = \alpha \lim_{x \mathop \to -\infty} \map f x$
$\blacksquare$





