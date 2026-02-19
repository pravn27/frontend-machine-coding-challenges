# Frontend System Design: RADIO Pattern

## R - Requirements (5 minutes)

### 1. Functional Requirements

- Core features
- User interactions
- Input/Output specifications
- Edge cases

### 2. Non-Functional Requirements

- Performance expectations
- Accessibility standards
- Browser compatibility
- Responsive design needs

### 3. Constraints

- Time limitations
- Technical constraints
- Browser support
- Performance targets

## A - Architecture (5 minutes)

### 1. Component Structure

```
src/
  components/
    ComponentName/
      index.js           # Main component
      styles.css         # Component styles
      utils.js           # Helper functions
      constants.js       # Constants
      __tests__/         # Test files
```

### 2. Data Flow

- Props structure
- State management
- Event handling
- Side effects

### 3. Component API

```javascript
interface ComponentProps {
  // Required props
  requiredProp: string;

  // Optional props
  optionalProp?: number;

  // Event handlers
  onChange?: (value: any) => void;

  // Customization
  className?: string;
}
```

## D - Design (5 minutes)

### 1. UI/UX Design

- Visual hierarchy
- Interaction patterns
- Responsive behavior
- Animation guidelines

### 2. Component Design

```javascript
const ComponentName = ({ requiredProp, optionalProp, onChange }) => {
  // State management
  const [state, setState] = useState(initialState);

  // Event handlers
  const handleChange = useCallback((event) => {
    // Handle change
  }, []);

  return <div className="component">{/* Component structure */}</div>;
};
```

### 3. Styling Design

```css
/* BEM Methodology */
.component {
}
.component__element {
}
.component__element--modifier {
}
```

## I - Implementation (5 minutes)

### 1. Core Implementation

- Primary functionality
- State management
- Event handling
- Error handling

### 2. Edge Cases

- Input validation
- Error states
- Loading states
- Empty states

### 3. Testing Implementation

```javascript
describe("Component", () => {
  // Core functionality
  it("should render correctly", () => {});

  // Edge cases
  it("should handle edge cases", () => {});

  // Error states
  it("should handle errors", () => {});
});
```

## O - Optimization (5 minutes)

### 1. Performance Optimization

- Memoization
- Re-render optimization
- Event debouncing/throttling
- Resource loading

### 2. Code Optimization

- Code splitting
- Bundle size
- Tree shaking
- Lazy loading

### 3. Testing & Documentation

```javascript
/**
 * ComponentName
 *
 * @description
 * Brief description of the component
 *
 * @example
 * <ComponentName
 *   requiredProp={value}
 *   optionalProp={value}
 * />
 */
```

## Implementation Checklist

### Requirements

- [ ] Core features defined
- [ ] Edge cases identified
- [ ] Constraints documented
- [ ] Performance targets set

### Architecture

- [ ] Component structure planned
- [ ] Data flow designed
- [ ] API defined
- [ ] Dependencies identified

### Design

- [ ] UI/UX patterns defined
- [ ] Component structure designed
- [ ] Styling approach chosen
- [ ] Responsive design planned

### Implementation

- [ ] Core functionality implemented
- [ ] Edge cases handled
- [ ] Error handling added
- [ ] Tests written

### Optimization

- [ ] Performance optimized
- [ ] Code optimized
- [ ] Documentation complete
- [ ] Final testing done

## Time Management (Total: 25 minutes)

- Requirements: 5 minutes
- Architecture: 5 minutes
- Design: 5 minutes
- Implementation: 5 minutes
- Optimization: 5 minutes

## Evaluation Criteria

### Requirements (20%)

- Complete feature set
- Edge cases covered
- Constraints met
- Performance targets achieved

### Architecture (20%)

- Clean component structure
- Efficient data flow
- Well-defined API
- Proper dependency management

### Design (20%)

- Consistent UI/UX
- Responsive design
- Accessibility
- Visual polish

### Implementation (20%)

- Clean code
- Error handling
- Testing coverage
- Documentation

### Optimization (20%)

- Performance metrics
- Code quality
- Bundle size
- Resource usage

## Common Pitfalls to Avoid

### Requirements

1. Incomplete requirements
2. Unclear constraints
3. Missing edge cases
4. Unrealistic targets

### Architecture

1. Over-engineering
2. Poor data flow
3. Unclear API
4. Dependency issues

### Design

1. Inconsistent UI
2. Poor accessibility
3. Unresponsive design
4. Missing states

### Implementation

1. Sloppy code
2. Missing tests
3. Poor error handling
4. Incomplete documentation

### Optimization

1. Performance issues
2. Large bundle size
3. Memory leaks
4. Unoptimized resources
