# 

Source: https://proofwiki.org/wiki/Properties_of_Limit_at_Minus_Infinity_of_Real_Function/Product_Rule

Theorem
Let $a \in \R$. 
Let $f, g : \hointl {-\infty} a \to \R$ be real functions such that: 

$\ds \lim_{x \mathop \to -\infty} \map f x$ and $\ds \lim_{x \mathop \to -\infty} \map g x$ exist
where $\ds \lim_{x \mathop \to -\infty}$ denotes the limit at $-\infty$.

Then: 

$\ds \lim_{x \mathop \to -\infty} \paren {\map f x \map g x}$ exists
with: 

$\ds \lim_{x \mathop \to -\infty} \paren {\map f x \map g x} = \paren {\lim_{x \mathop \to \infty} \map f x} \paren {\lim_{x \mathop \to \infty} \map g x}$


Proof
From Properties of Limit at Minus Infinity of Real Function: Relation with Limit at Infinity, we have: 

$\ds \lim_{x \mathop \to \infty} \map f {-x}$ and $\ds \lim_{x \mathop \to \infty} \map g {-x}$ exist.
From Properties of Limit at Infinity of Real Function: Product Rule, we then have: 

$\ds \lim_{x \mathop \to \infty} \paren {\map f {-x} \map g {-x} }$ exists
with: 

$\ds \lim_{x \mathop \to \infty} \paren {\map f {-x} \map g {-x} } = \paren {\lim_{x \mathop \to \infty} \map f {-x} } \paren {\lim_{x \mathop \to \infty} \map g {-x} }$
From Properties of Limit at Minus Infinity of Real Function: Relation with Limit at Infinity, this gives: 

$\ds \lim_{x \mathop \to -\infty} \paren {\map f x \map g x} = \paren {\lim_{x \mathop \to \infty} \map f x} \paren {\lim_{x \mathop \to \infty} \map g x}$
$\blacksquare$





